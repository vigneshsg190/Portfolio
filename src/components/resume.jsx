
import { motion } from "framer-motion";
function Resume(){

  return (
    <section className="w-1/2 p-8 flex flex-col md:flex-row items-center justify-center" id="resume">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Frontend Developer</h3>
          <p className="font-semibold py-2">Analyse Digital Business Solution Pvt Ltd </p>
          <p> Jan 2024 – Present</p>
        </div>
        <motion.a
          href="/Vignesh-resume-1.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-red-600 text-white px-6 py-2 rounded shadow rounded-full"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};


export  default Resume ;