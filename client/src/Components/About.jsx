import React from "react";
import Footer from "./Footer";
import pic from "../assets/my-pic-2.JPG";

const About = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 mt-16 mb-20">

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          About Me
        </h1>

      {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={pic}
              alt="My profile"
              className="
                w-full max-w-sm 
                rounded-2xl shadow-xl 
                object-cover
              "
            />
          </div>

          {/* TEXT */}
          <div className="text-gray-900 text-lg leading-8">
            <p>
              Hi! I’m{" "}
              <span className="font-bold bg-gray-200 px-2 py-1 rounded-full hover:bg-gray-800 hover:text-white transition">
                Ujjwal Anand
              </span>
              , a passionate Full-Stack Developer specializing in the MERN
              stack (MongoDB, Express.js, React, Node.js). I love building
              clean, responsive web applications that solve real-world
              problems.
            </p>

            <p className="mt-5">
              I enjoy turning complex ideas into intuitive, scalable
              solutions—whether that’s a dynamic eCommerce store, a secure
              authentication system, or an interactive dashboard.
            </p>

            <p className="mt-5">
              Recently, I’ve been diving deeper into Tailwind CSS, TypeScript,
              and Socket.io to build modern and real-time web experiences.
            </p>

            <p className="mt-5">
              When I’m not coding, you’ll find me exploring open-source,
              reading tech blogs, or experimenting with new side projects.
              I’m always excited to collaborate and bring ideas to life.
              Let’s connect and create something amazing together!
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
