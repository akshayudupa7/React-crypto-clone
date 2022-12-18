import React from 'react'
import {useParams} from 'react-router-dom'
import useAxios  from '../Axios/useAxios'
import { Line } from 'react-chartjs-2';
import moment from 'moment'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';


  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );

const History = () => {

    const {id}=useParams()
   

    let {update}=useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`)
    console.log(update)

    let coinData=update?.prices?.map(value=> ({x:value[0], y:value[1].toFixed(2)}))
    
     const options={
        responsive:true
    }
     const data={
        labels:coinData?.map(value=>moment(value.x).format('MMM,YY')),
        datasets:[
            {
              fill:true,
              label:`${id}`,
              data:coinData?.map(value=>value.y),
              borderColor:'yellow',
              backgroundColor:'red'
            }
        ]
    }
  return (
    <div>
       <Line options={options}  data={data}/>
    </div>
  )
}
export default History