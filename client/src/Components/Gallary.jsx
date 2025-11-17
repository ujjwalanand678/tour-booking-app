import React from "react";
import gallery_1 from "../assets/gallery-01.jpg";
import gallery_2 from "../assets/gallery-02.jpg";
import gallery_3 from "../assets/gallery-03.jpg";
import gallery_4 from "../assets/gallery-04.jpg";
import gallery_5 from "../assets/gallery-05.jpg";
import gallery_6 from "../assets/gallery-06.jpg";
import gallery_7 from "../assets/gallery-07.jpg";
import gallery_8 from "../assets/gallery-08.jpg";

const Gallary = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-20 mb-20">

      {/* Section Title */}
      <p className="bg-amber-500 w-fit px-6 py-2 font-medium text-lg rounded-full text-center mb-4 text-white">
        Gallery
      </p>

      <p className="text-2xl sm:text-3xl font-medium mb-10">
        Visit our customers tour gallery
      </p>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-2 
          sm:grid-cols-3 
          lg:grid-cols-4
          gap-4 sm:gap-6
        "
      >
        {[gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8].map(
          (img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <img
                src={img}
                alt={`gallery_${index + 1}`}
                className="
                  w-full 
                  h-full
                  object-cover 
                  aspect-square 
                  transform 
                  transition-transform 
                  duration-300 
                  hover:scale-110
                "
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallary;
