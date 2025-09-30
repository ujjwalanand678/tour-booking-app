import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/ConfigBaseURL";

const AllTourDB = () => {
  const [tourData, setTourData] = useState([]);
  const getTourData = async () => {
    const response = await fetch(`${BASE_URL}/getalltour`);
    const { data } = await response.json();
    //we cannot use this data directly . so that is why we will use the useState to store the data and then use it.
    setTourData(data);
  };
  useEffect(() => {
    getTourData();
  }, []);
  return (
    <>
      {tourData?.length === 0 ? (
        <>
          <h1>LOADING..........</h1>
        </>
      ) : (
        <>
          {tourData.map((tour) => (
            <>
              <div className="grid grid-cols-4">
                <div className="">
                   <h1>{tour.title}</h1>
                <h1>{tour.price}</h1>
                <p>{tour.city}</p>
                <p>{tour.address}</p>
                <p>{tour.distance}</p>
                <p>{tour.maxGroupSize}</p>
                <p>{tour.featured}</p>
                <p>{tour.avgRating}</p>
                <p>{tour.numReviews}</p>
                <p>{tour.description}</p>
                <img src={tour.photo} alt="tourimage" />
                </div>
               
              </div>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default AllTourDB;
