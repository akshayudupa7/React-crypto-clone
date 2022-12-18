import React from 'react'
import useAxios from '../Axios/useAxios'
import MarketDetails from './MarketDetails'

 const Market = () => {
    let {update}=useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  return (
    <div className='w-full my-5'>
       <h1 className='text-center my-5 text-4xl font-bold'>Market</h1>
      <div className='font-semibold flex flex-row flex-wrap gap-8 w-full pl-4 flex-start py-2 flex-1 '>
        {
            update?.map((value)=>(
                  <MarketDetails coin={value}/>
            ))
        }
      </div>
    </div>
  )
}
export default Market
