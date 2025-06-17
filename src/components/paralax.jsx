import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import myimg from '../assets/myimg.jpg'


const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // from bottom of screen to top
  });

  // Move the image slower than scroll (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["-50px", "50px"]);

  return (
    <section className="h-[150vh] bg-gray-900 flex items-center justify-center">
      <div ref={ref} className="relative h-[500px] w-full overflow-hidden">
        <motion.img
          src="C:\Users\AD\portfolio\Vignesh-portfolio\src\assets\myimg.jpg"
          alt="Parallax"
          className="absolute w-full h-full object-cover"
          style={{ y }}
        />
        <div className="relative z-10 p-8 text-center text-white">
          <h1 className="text-4xl font-bold">Parallax Heading</h1>
          <p className="mt-4 text-lg">Scroll to see the parallax effect</p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;

