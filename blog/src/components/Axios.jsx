import axios from "axios";
import { useState, useEffect } from "react";

const Axiosr = () => {
  const [mydata, setMyData] = useState([]);
  const [error, setError] = useState();

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
        getApiData()
  }, []);

  return (
    <>
      
      
    </>
  );
};

export default Axiosr;
