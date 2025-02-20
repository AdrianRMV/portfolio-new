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
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
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
                        <motion.a
                            href="#proyects"
                            className="button-hero"
                            variants={textVariants}
                        >
                            See the Lastest Works
                        </motion.a>
                        <motion.a
                            href="/Resume_Adrian_Ramirez.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="button-hero"
                            variants={textVariants}
                        >
                            Resume
                        </motion.a>
                    </motion.div>
                    <motion.img
                        src="/scroll.png"
                        alt=""
                        variants={textVariants}
                        animate="scrollButton"
                    />
                </motion.div>
            </div>
            <motion.div
                className="sliderTextContainer"
                initial="initial"
                animate="animate"
                variants={sliderVariants}
            >
                Creator Influencer Artist Reader
            </motion.div>
            <div className="imgContainer">
                <img src="/Adrian_Rv.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Hero;
