import React from "react";
import TourDetail from "./TourDetail";
import TourBookingForm from "./TourBookingForm";
import PostReview from "./PostReview";
import Footer from "./Footer";

const TourBookingPage = () => {
  return (
    <>
      <div
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-10
          px-4 sm:px-6 md:px-10 lg:px-20 xl:px-36 2xl:px-56
          mt-16 mb-20
        "
      >
        {/* LEFT SIDE – Tour Details + Reviews */}
        <div className="space-y-10">
          <TourDetail />
          <PostReview />
        </div>

        {/* RIGHT SIDE – Booking Form */}
        <div className="lg:pl-8 xl:pl-12">
          <TourBookingForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TourBookingPage;
