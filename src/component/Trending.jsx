import useAxios from '../Axios/useAxios'
import React from 'react'
import TrendDetails from './TrendDetails'





const Trending = ({coin}) => {
  const { update} = useAxios('search/trending');

  console.log(update)

  return (
   
    <div className="mt-8 ">
      <h1 className="text-4xl font-bold text-center mb-4">Trending</h1>
      <div className='flex flex-row flex-wrap gap-6 w-full pl-4 flex-start py-2 '>
      {update && update.coins.map(coin => <TrendDetails key={coin.item.coin_id} coin={coin.item} />)}
      </div>
    </div>

  )
}


export  default Trending