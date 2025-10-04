import React from "react";
import Footer from "./Footer";
import pic from "../assets/my-pic-2.JPG";
const About = () => {
  return (
    <>
      <div className="mx-40">
        <h1 className="text-center text-4xl mt-15 mb-5 font-bold">About me</h1>
        <div className="grid grid-cols-2 gap-10 mb-40">
          <div className="w-[80%] ">
            <img src={pic} alt="my pic" className="mask-x-from-70% mask-x-to-90% mask-y-from-70% mask-y-to-90%" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 text-xl leading-8 items-center">
            Hi! I’m{" "}
            <span className="hover:bg-gray-500 rounded-full p-2 hover:text-white font-bold">
              Ujjwal Anand
            </span>
            , a passionate Full-Stack Developer specializing in the MERN stack
            (MongoDB, Express.js, React, Node.js). I love building clean,
            responsive web applications that solve real-world problems. I enjoy
            turning complex ideas into intuitive, scalable solutions – whether
            that’s a dynamic eCommerce store, a secure authentication system, or
            an interactive dashboard. I’m always learning new technologies and
            best practices. Lately, I’ve been exploring Tailwind CSS,
            TypeScript, and Socket.io to build modern, real-time web
            experiences. When I’m not coding, you’ll find me exploring
            open-source projects, reading tech blogs, or experimenting with new
            side projects. I’m always excited to collaborate and bring ideas to
            life. Let’s connect and create something amazing together!
          </p>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
