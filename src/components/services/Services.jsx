import { useRef } from 'react';
import './services.scss';
import { motion, useInView } from 'framer-motion';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: '-100px' });

    return (
        <motion.div
            className="services"
            variants={variants}
            initial="initial"
            ref={ref}
            animate={'animate'}
        >
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow
                    <br /> and move forward
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
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Web Development</h2>
                    <p>
                        We transform your ideas into interactive and appealing
                        websites. We use the latest technologies to provide
                        customized and scalable web solutions.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Mobile Applications</h2>
                    <p>
                        We develop intuitive and functional mobile applications
                        for iOS and Android platforms. From concept to
                        implementation, we provide solutions that meet your
                        users&apos; needs.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>Performance Optimization</h2>
                    <p>
                        We enhance the performance of your applications and
                        websites, identifying and resolving bottlenecks to
                        ensure a fast and efficient user experience.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    className="box"
                    whileHover={{ background: 'lightgray', color: 'black' }}
                >
                    <h2>User Interface (UI) Design</h2>
                    <p>
                        We create attractive and user-friendly interfaces for
                        your applications and websites. Our focus is on user
                        experience to ensure satisfaction and retention of your
                        users.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;
