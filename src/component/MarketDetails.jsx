import React from 'react'
import {Link} from 'react-router-dom'

 const MarketDetails = ({coin}) => {

  return (
    <div>
        <Link to={`/coins/${coin?.id}`}>
        <div className='flex py-3 flex-wrap flex-col w-full bg-orange-100 rounded-3xl'>
            <img className='w-1/2 m-auto'src={coin.image} alt={coin.name}/>
            <p className='text-center text-xl my-3 '>{coin.name}({coin.symbol})</p>
            <p className='text-center'>Current Price: <span className='text-indigo-700'>{coin.current_price}</span></p>
            <p className='text-center'>Market Capital Rank:<span className='text-indigo-700'> {coin.market_cap_rank}</span></p>
            <p className={`${coin.market_cap_change_percentage_24h>0?'text-green-600':'text-red-600'} text-center`}>Market Change : <span className=''>{coin.market_cap_change_percentage_24h}%</span></p>
        </div>
        </Link>
    </div>
  )
}
export default MarketDetails
