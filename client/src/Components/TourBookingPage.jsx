import React from "react";
import TourDetail from "./TourDetail";
import TourBookingForm from "./TourBookingForm";
import PostReview from "./PostReview";
import Footer from "./Footer";

const TourBookingPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-30">
        <div>
        <TourDetail />
        <PostReview/>
        </div>
        <div className="ms-10">
          <TourBookingForm/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TourBookingPage;
