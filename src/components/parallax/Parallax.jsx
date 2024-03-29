import { useRef } from 'react';
import './parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const Parallax = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background:
                    type === 'services'
                        ? 'linear-gradient(180deg, #111132, #0c0c1d)'
                        : 'linear-gradient(180deg, #111132, #505064)',
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === 'services' ? 'What I Do?' : 'What I Did?'}
            </motion.h1>
            <motion.div style={{ position: 'absolute', bottom: '300px' }}>
                <motion.img
                    src="/scroll.png"
                    alt=""
                    style={{
                        textAlign: 'center',
                        display: type === 'services' ? 'none' : 'block',
                    }}
                    variants={textVariants}
                    animate="scrollButton"
                />
            </motion.div>
            <motion.div className="mountains"></motion.div>
            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${
                        type === 'services' ? '/planets.png' : '/sun.png'
                    })`,
                }}
            ></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallax;
