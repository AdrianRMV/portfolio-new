import { useRef } from 'react';
import './services.scss';
import { useInView, motion, animate } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        scale: 0.9,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};
const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, {
        margin: '-100px',
    });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial={'initial'}
            ref={ref}
            animate={isInView && 'animate'}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                            Unique
                        </motion.b>{' '}
                        Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: 'orange' }}>
                            For Your
                        </motion.b>{' '}
                        Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt atque totam iusto dicta error,
                        dignissimos odit aliquid incidunt exercitationem.
                        Aliquam unde sed maxime maiores natus necessitatibus ab
                        veniam quia corporis?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt atque totam iusto dicta error,
                        dignissimos odit aliquid incidunt exercitationem.
                        Aliquam unde sed maxime maiores natus necessitatibus ab
                        veniam quia corporis?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt atque totam iusto dicta error,
                        dignissimos odit aliquid incidunt exercitationem.
                        Aliquam unde sed maxime maiores natus necessitatibus ab
                        veniam quia corporis?
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deserunt atque totam iusto dicta error,
                        dignissimos odit aliquid incidunt exercitationem.
                        Aliquam unde sed maxime maiores natus necessitatibus ab
                        veniam quia corporis?
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;