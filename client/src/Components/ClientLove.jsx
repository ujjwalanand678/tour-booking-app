import React from "react";
import customerOne from "../assets/ava-1.jpg";
import customerTwo from "../assets/ava-2.jpg";
import customerThree from "../assets/ava-3.jpg";

const ClientLove = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-20 mb-20">

      {/* Section Heading */}
      <p className="bg-amber-500 w-fit px-6 py-2 font-medium text-lg rounded-full text-center mb-4 text-white">
        Clients Love
      </p>

      <h3 className="text-2xl sm:text-3xl font-medium mb-10">
        What our clients say about us
      </h3>

      {/* Testimonials Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 text-base leading-6 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corrupti sapiente consequatur, quae obcaecati at hic veritatis
            commodi eos mollitia minima corporis dolores nesciunt autem.
          </p>

          <div className="flex items-center gap-4">
            <img
              src={customerOne}
              alt="customerOne"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <p className="text-lg font-bold text-gray-800">Jhon Doe</p>
              <p className="text-base text-gray-600">Customer</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 text-base leading-6 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corrupti sapiente consequatur, quae obcaecati at hic veritatis
            commodi eos mollitia minima corporis dolores nesciunt autem.
          </p>

          <div className="flex items-center gap-4">
            <img
              src={customerTwo}
              alt="customerTwo"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <p className="text-lg font-bold text-gray-800">Jhon Doe</p>
              <p className="text-base text-gray-600">Customer</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
          <p className="text-gray-700 text-base leading-6 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            corrupti sapiente consequatur, quae obcaecati at hic veritatis
            commodi eos mollitia minima corporis dolores nesciunt autem.
          </p>

          <div className="flex items-center gap-4">
            <img
              src={customerThree}
              alt="customerThree"
              className="w-14 h-14 rounded-xl object-cover"
            />
            <div>
              <p className="text-lg font-bold text-gray-800">Jhon Doe</p>
              <p className="text-base text-gray-600">Customer</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ClientLove;
