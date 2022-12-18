import axios from 'axios';
import {useState,useEffect} from 'react'


const useAxios = (param) => {
    let [update,setUpdate]=useState(null);
    let [loading,setLoading]=useState(false);
   let [error,setError]=useState('')
  
    axios.defaults.baseURL='https://api.coingecko.com/api/v3';
   let fetchData=async(param)=>{
        try{
        setLoading(true);
     let response= await axios(param)
     setUpdate(response.data);
      console.log(update)
        }catch(err){
         setError(err)
        }finally{
       setLoading(false)
    }
}
     useEffect(()=>{
        fetchData(param)
    },[])
   return{  update,loading,error}
   }
export default useAxios