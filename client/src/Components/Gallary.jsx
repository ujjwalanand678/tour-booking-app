import React from "react";
import gallery_1 from "../assets/gallery-01.jpg"

const Gallary = () => {
  return (
  <div>
    <p>Gallery</p>
    <p>Visit our customers tour gallery</p>
    <div className="grid grid-cols-4">
    <img src={gallery_1} alt="" />
    </div>
  </div>);

};

export default Gallary;
