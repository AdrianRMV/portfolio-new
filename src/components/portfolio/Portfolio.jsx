import './portfolio.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SingleProyect from './SingleProyect';

const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: 'https://images.pexels.com/photos/18684565/pexels-photo-18684565/free-photo-of-ciudad-urbano-ciudades-tejados.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 2,
        title: 'Next.js Commerce',
        img: 'https://images.pexels.com/photos/18510514/pexels-photo-18510514/free-photo-of-comida-apple-verano-jardin.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 3,
        title: 'Vanilla JS',
        img: 'https://images.pexels.com/photos/18643958/pexels-photo-18643958/free-photo-of-edificio-ladrillos-pared-plantas.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 4,
        title: 'Music App',
        img: 'https://images.pexels.com/photos/18957568/pexels-photo-18957568/free-photo-of-madera-ligero-amanecer-paisaje.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
];

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" id="proyects" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX }}
                    className="progressBar"
                ></motion.div>
            </div>
            {items.map((item) => (
                <SingleProyect item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
