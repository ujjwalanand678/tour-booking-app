import React from "react";
import TourDetail from "./TourDetail";
import TourBookingForm from "./TourBookingForm";
import PostReview from "./PostReview";
import Footer from "./Footer";

const TourBookingPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-30">
        <div>
        <TourDetail />
        <PostReview/>
        </div>
        <div>
          <TourBookingForm/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TourBookingPage;
