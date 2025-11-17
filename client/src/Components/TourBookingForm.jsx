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
    alert("Booking successful!");
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 mt-10 mb-16 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg">

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Booking Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 text-gray-700 focus:ring focus:ring-orange-300 outline-none"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 text-gray-700 focus:ring focus:ring-orange-300 outline-none"
            required
          />

          {/* Date + Persons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full sm:w-1/2 border rounded-xl px-4 py-3 text-gray-700 focus:ring focus:ring-orange-300 outline-none"
              required
            />

            <input
              type="number"
              name="persons"
              value={formData.persons}
              min="1"
              onChange={handleChange}
              className="w-full sm:w-1/2 border rounded-xl px-4 py-3 text-gray-700 focus:ring focus:ring-orange-300 outline-none"
              required
            />
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4 mt-4 text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>{pricePerPerson} × {formData.persons} person</span>
              <span>{pricePerPerson * formData.persons}</span>
            </div>

            <div className="flex justify-between">
              <span>Service charges</span>
              <span>{serviceCharge}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mt-3 text-gray-900">
              <span>Total</span>
              <span>{total}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default TourBookingForm;
