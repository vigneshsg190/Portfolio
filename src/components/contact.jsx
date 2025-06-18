import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

import Lottie from 'lottie-react';
import mailAnimation from '../assets/Animation - 1750004829267.json';
import githubAnimation from '../assets/Animation - 1750010113879.json';
import linkedinAnimation from '../assets/Animation - 1750010311571.json';


// downloaded from lottiefiles.com


function Contact() {
    return (
        <>

            <div className=" w-9/12  mx-auto py-12">
                <p id = 'contact'className="text-2xl">Contact</p>
                <div className="flex gap-6 mt-4 items-center">
                    <Lottie
                        animationData={mailAnimation}
                        loop={true}
                        autoplay={true} className="w-15 h-14"
                    />
                    <span>vigneshsg@gmail.com</span>
                    
                </div>
                <div className="flex gap-6 mt-4 items-center">
                    <Lottie
                        animationData={githubAnimation}
                        loop={true}
                        autoplay={true} className="w-15 h-14"

                    />
                    <span>github.com/vigneshsg190</span>
                    
                </div>
                <div className="flex gap-6 mt-4 items-center">
                    <Lottie
                        animationData={linkedinAnimation}
                        loop={true}
                        autoplay={true} className="w-15 h-14"

                    />
                    <span>vigneshsg@gmail.com</span>
                    
                </div>
                
            </div>


        </>
    )
}

export default Contact;

