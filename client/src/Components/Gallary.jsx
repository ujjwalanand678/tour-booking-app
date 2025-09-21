import React from "react";
import gallery_1 from "../assets/gallery-01.jpg"
import gallery_2 from "../assets/gallery-02.jpg"
import gallery_3 from "../assets/gallery-03.jpg"
import gallery_4 from "../assets/gallery-04.jpg"
import gallery_5 from "../assets/gallery-05.jpg"
import gallery_6 from "../assets/gallery-06.jpg"
import gallery_7 from "../assets/gallery-07.jpg"
import gallery_8 from "../assets/gallery-08.jpg"


const Gallary = () => {
  return (
  <div className="px-40 mt-25">
    <p className="bg-amber-500 w-30 py-2 font-medium text-lg rounded-full text-center mb-4 text-white">Gallery</p>
    <p className="text-4xl font-medium mb-10">Visit our customers tour gallery</p>
    <div className="grid grid-cols-4 gap-6">
    <img src={gallery_1} alt="gallery_1"  className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_2} alt="gallery_2" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_3} alt="gallery_3" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_4} alt="gallery_4" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_5} alt="gallery_5" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_6} alt="gallery_6" className="rounded-2xl transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_7} alt="gallery_7" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    <img src={gallery_8} alt="gallery_8" className="rounded-2xl  transform transition-transform duration-300 hover:scale-110"/>
    
    </div>
  </div>);

};

export default Gallary;
