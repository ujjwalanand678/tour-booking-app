import React from "react";
import TourPageBanner from "./TourPageBanner";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import AllTourDB from "./AllTourDB";

const TourPage = () => {
  return (
    <div className="w-full">

      {/* Banner */}
      <TourPageBanner />

      {/* Tour Listings */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-10 mb-10">
        <AllTourDB />
      </div>

      {/* Subscribe Section */}
      <Subscribe />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TourPage;
