import React from 'react'
import {Link} from 'react-router-dom'

 const TrendDetails = ({coin}) => {
 
  return (
    <div className='w-3/12'>
    <Link to={`/coins/${coin?.id}`}>
    <div className='bg-red-200 w-full py-3 font-semibold '>
    <img className='m-auto my-2' src={coin.small} alt={coin.name}/>
    <span className='text-center '><p className=' text-xl'>{coin.name} ({coin.symbol})</p></span>
    <p className='text-center my-1'>Market-Cap: <span className='text-indigo-700'> {coin.market_cap_rank}</span></p>
    </div>
    </Link>
    </div>
  )
}
export default TrendDetails