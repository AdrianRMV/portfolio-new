import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SingleProyect = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <video autoPlay muted playsInline loop>
                            <source src={item.video_url} type="video/webm" />
                        </video>
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.url}>See Demo</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SingleProyect;
