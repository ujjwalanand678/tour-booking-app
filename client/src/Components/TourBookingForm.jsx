import React, { useState } from "react";

const TourBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    date: "",
    persons: 1,
  });

  const pricePerPerson = 99;
  const serviceCharge = 10;

  const total = pricePerPerson * formData.persons + serviceCharge;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Booking successful!");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 mt-10 mb-10 flex justify-center">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">

        <h2 className="text-xl font-semibold mb-4">Information</h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-gray-700"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-gray-700"
            required
          />

          {/* Date + Persons */}
          <div className="flex gap-3">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-1/2 border rounded-lg px-3 py-2 text-gray-700"
              required
            />

            <input
              type="number"
              name="persons"
              value={formData.persons}
              min="1"
              onChange={handleChange}
              className="w-1/2 border rounded-lg px-3 py-2 text-gray-700"
              required
            />
          </div>

          {/* Price Calculation */}
          <div className="border-t pt-4 mt-4 text-sm">
            <div className="flex justify-between">
              <span>
                {pricePerPerson} × {formData.persons} person
              </span>
              <span>{pricePerPerson * formData.persons}</span>
            </div>

            <div className="flex justify-between">
              <span>Service charges</span>
              <span>{serviceCharge}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-3">
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2.5 rounded-full font-semibold hover:bg-orange-500 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TourBookingForm;
