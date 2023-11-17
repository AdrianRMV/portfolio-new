import './portfolio.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SingleProyect from './SingleProyect';

const items = [
    {
        id: 1,
        title: 'CityPaz',
        video_url: '/citypaz-Record.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 2,
        title: 'Restaurant Ecommerce',
        video_url: '/Restaurant-Record.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 3,
        title: 'Gifs API',
        video_url: '/Gifs-Record.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 4,
        title: 'Heroes API',
        video_url: '/HeroesApp.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 4,
        title: 'Chat WebSockets',
        video_url: '/chatSocket.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 4,
        title: 'MoviesDB',
        video_url: '/task-record.webm',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus sint cumque molestiae atque labore odio maxime inventore tempora voluptatum? Ipsum aliquid ratione corrupti ipsa magnam maiores quas voluptatibus repudiandae.',
    },
    {
        id: 4,
        title: 'Task Creator',
        video_url: '/task-record.webm',
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
        <div className="portfolio" ref={ref}>
            <div className="progress" id="proyects">
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
