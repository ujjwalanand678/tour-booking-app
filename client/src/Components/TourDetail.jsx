import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";
import { useParams } from "react-router-dom";

const TourDetail = () => {
      const [tourData , setTourData] = useState([]);
    const {id}  = useParams()

    const getTourData = async()=>{
        const response = await fetch(`${BASE_URL}/getsingletour/${id}`)
        const {data}= await response.json();
        setTourData(data)
        console.log(data);
    }
  
    useEffect(()=>{
        getTourData()
    },[])
console.log(tourData);
  return (<div>TourDetail</div>);
};


export default TourDetail;
