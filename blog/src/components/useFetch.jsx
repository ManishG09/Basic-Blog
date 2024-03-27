import { useState, useEffect } from "react";
import axios from "axios"
const useFetch = (url) => {
  const [data, setData] = useState(null);


useEffect(() => {
  const data1 = async ()=>{
    const res = await axios.get(url)
    console.log(res)
    setData(res.data)
  }
   data1()
} ,[]);
console.log(data)
return { data };
};

export default useFetch;
