import React from "react";
import customerOne from "../assets/ava-1.jpg"
import customerTwo from "../assets/ava-2.jpg"
import customerThree from "../assets/ava-3.jpg"

const ClientLove = () => {
  return (
  <div className="px-40 mt-30 mb-40">
    <div>
         <p className="bg-amber-500 w-40 py-2 font-medium text-lg rounded-full text-center mb-5 text-white">
          Clients Love
        </p>
          <h3 className="text-4xl font-medium mb-10">
         What our clients say about us
        </h3>
    
        <div className="grid grid-cols-3 gap-10">
            <div>
                <p className="text-lg leading-8  text-gray-800 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti sapiente consequatur, quae obcaecati at hic veritatis commodi eos mollitia minima corporis dolores nesciunt autem doloremque expedita nihil molestiae porro? </p>
                <div className="grid grid-cols-3">
                    <img src={customerOne} alt=" customerOne" className="w-25 rounded-lg" />
                    <div>
                        <p className="text-xl font-bold text-gray-800 ">Jhon Doe</p>
                        <p className="text-lg  text-gray-800">Customer</p>
                    </div>
                </div>
            </div>
               <div>
                <p className="text-lg leading-8  text-gray-800 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti sapiente consequatur, quae obcaecati at hic veritatis commodi eos mollitia minima corporis dolores nesciunt autem doloremque expedita nihil molestiae porro? </p>
                <div className="grid grid-cols-3">
                    <img src={customerTwo} alt=" customerOne" className="w-25 rounded-lg" />
                    <div>
                        <p className="text-xl font-bold text-gray-800 ">Jhon Doe</p>
                        <p className="text-lg  text-gray-800">Customer</p>
                    </div>
                </div>
            </div>
               <div>
                <p className="text-lg leading-8  text-gray-800 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius corrupti sapiente consequatur, quae obcaecati at hic veritatis commodi eos mollitia minima corporis dolores nesciunt autem doloremque expedita nihil molestiae porro? </p>
                <div className="grid grid-cols-3">
                    <img src={customerThree} alt=" customerOne" className="w-25 rounded-lg" />
                    <div>
                        <p className="text-xl font-bold text-gray-800 ">Jhon Doe</p>
                        <p className="text-lg  text-gray-800">Customer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </div>);
};

export default ClientLove;
