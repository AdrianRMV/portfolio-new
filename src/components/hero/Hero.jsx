import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="text-container"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>
                        ADRIAN RAMIREZ
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web Developer and UI desinger
                    </motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>
                            See the Lastest Works
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Contact Me
                        </motion.button>
                    </motion.div>
                    <motion.img
                        src="/scroll.png"
                        alt=""
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </div>
            <div className="sliderTextContainer">
                Creator Influencer Artist Reader
            </div>
            <div className="imgContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
