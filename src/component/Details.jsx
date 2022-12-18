import React from 'react'
import useAxios from '../Axios/useAxios'
import {useParams} from 'react-router-dom'
const Details = ({coin}) => {
    const {id}=useParams()
     console.log(id)
     let {update}=useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false`)
     console.log(update)
     return (
    <div>Details
     
      <div className=''>
          <img className='m-auto' src={update?.image?.large} alt={`${update?.name}`}/>
          <h2 className='text-center text-4xl font-bold my-5'>{update?.name} ({update?.symbol})</h2>
          <div className='flex justify-around'>
            <div className='text-black font-bold text-2xl tracking-wide leading-10'>
                <p>Coingecko Rank :<span className=' text-pink-700'> {update?.coingecko_rank?(update?.coingecko_rank):('null')}</span></p>
                <p>Coingecko Score :<span className='text-pink-700 '> {update?.coingecko_score?(update?.coingecko_score):('null')}</span></p>
                <p>Hashing Algorithm :<span className=' text-pink-700'> {update?.hashing_algorithm?(update?.hashing_algorithm):('null')}</span></p>
                <p>Genesis date : <span className=' text-pink-700'> {update?.genesis_date?(update?.genesis_date):('null')}</span></p>
                <p>Public Interest Score :<span className=' text-pink-700'> {update?.public_interest_score?(update?.public_interest_score):('null')}</span></p>
            </div>
            <div className='text-black font-bold text-2xl tracking-wide leading-10'>
               
                <p>Market Cap Rank : <span className=' text-pink-700'> {update?.market_cap_rank?(update?.market_cap_rank):('null')}</span></p>
             
                <p>Liquidity Score :<span className=' text-pink-700'> {update?.liquidity_score?(update?.liquidity_score):('null')}</span></p>
                <p>BlockTime In Min :<span className=' text-pink-700'> {update?.block_time_in_minutes?(update?.block_time_in_minutes):('null')}</span></p>
                <p >Home Page :<a href={update?.links?.homepage?.[0]} className=' text-pink-700 underline hover:no-underline'> {update?.links?.homepage?.[0]?(update?.links?.homepage?.[0]):('null')}</a></p>
                <p >Sub Reddit Url :<a href={update?.links?.subreddit_url} className=' text-pink-700 underline hover:no-underline'> {update?.links?.subreddit_url?(update?.links?.subreddit_url):('null')}</a></p>

          </div>
          </div>

      </div>
    </div>
  )
}
export  default Details