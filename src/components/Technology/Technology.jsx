import React from "react";
import { motion } from "framer-motion";
import { FaLaravel, FaNodeJs, FaReact, FaAndroid } from "react-icons/fa";
import { SiMicrosoftsql, SiDotnet, SiFlutter } from "react-icons/si";

const technologies = [
  { name: "PHP Laravel", imgSrc: "/src/components/images/laravel.png" },
  { name: "ASP.net C#", imgSrc: "/src/components/images/dotnet.png" },
  { name: "SQL Server", imgSrc: "/src/components/images/sqlserver.png" },
  { name: "Node.js", imgSrc: "/src/components/images/nodejs.png" },
  { name: "React Js", imgSrc: "/src/components/images/reactjs.png" },
  { name: "Android", imgSrc: "/src/components/images/android.png" },
  { name: "Flutter", imgSrc: "/src/components/images/flutter.png" },
];

const steps = [
  { name: "Requirement Gathering", color: "bg-blue-500" },
  { name: "Project Scope", color: "bg-red-500" },
  { name: "Development", color: "bg-blue-500" },
  { name: "Test & Feedback", color: "bg-yellow-500" },
  { name: "Go Live", color: "bg-green-500" },
];

const Technology = () => {
  return (
    <div className="p-10 text-center">
      <motion.h2 
        className="text-2xl font-bold text-blue-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        USING TECHNOLOGY FOR PROFESSIONAL DEVELOPMENT
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.1 }}
          >
            <img src={tech.imgSrc} alt={tech.name} className='w-16 h-16' />
            <p className="text-sm font-semibold mt-2">{tech.name}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.h2 
        className="text-2xl font-bold text-blue-600 mt-10 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SOFTWARE DEVELOPMENT PROCEDURE
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            className={`px-4 py-2 text-white rounded-full ${step.color} text-sm font-semibold shadow-lg`}
            whileHover={{ scale: 1.1 }}
          >
            {step.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
