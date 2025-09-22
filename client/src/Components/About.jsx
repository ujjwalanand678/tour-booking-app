import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="mx-40">
        <h1 className="text-center text-5xl mt-25 mb-8 font-bold">About me</h1>
        <p className="text-gray-900 text-2xl leading-10">
          Hi! I’m <span className="hover:bg-gray-500 rounded-full p-2 hover:text-white font-bold">Ujjwal Anand</span>, a passionate Full-Stack Developer specializing
          in the MERN stack (MongoDB, Express.js, React, Node.js). I love
          building clean, responsive web applications that solve real-world
          problems. I enjoy turning complex ideas into intuitive, scalable
          solutions – whether that’s a dynamic eCommerce store, a secure
          authentication system, or an interactive dashboard. I’m always
          learning new technologies and best practices. Lately, I’ve been
          exploring Tailwind CSS, TypeScript, and Socket.io to build modern,
          real-time web experiences. When I’m not coding, you’ll find me
          exploring open-source projects, reading tech blogs, or experimenting
          with new side projects. I’m always excited to collaborate and bring
          ideas to life. Let’s connect and create something amazing together!
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
