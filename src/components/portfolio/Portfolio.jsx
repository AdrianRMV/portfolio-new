import { useRef } from 'react';
import './portfolio.scss';
import { motion, useScroll } from 'framer-motion';

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

const Single = ({ item }) => {
    return <section>{item.title}</section>;
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgrss } = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <div className="progressBar"></div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;
