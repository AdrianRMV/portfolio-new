import './portfolio.scss';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SingleProyect from './SingleProyect';

const items = [
    {
        id: 1,
        title: 'CityPaz',
        video_url: '/citypaz-Record.webm',
        url: 'https://citypaz.com/',
        desc: "CityPaz is the app revolutionizing the search for local deals. Featuring an interactive map with pinned businesses showcasing promotions, it's developed using React for a seamless experience, Framer Motion for engaging transitions, and modern design with Tailwind and SASS. Leaflet brings the map to life, making it easy to discover offers. Explore your city and save with CityPaz!",
    },
    {
        id: 2,
        title: 'Restaurant Ecommerce',
        url: 'https://restaurant-three-alpha.vercel.app/',
        video_url: '/Restaurant-Record.webm',
        desc: "Embark on an authentic Italian culinary journey with our e-commerce restaurant. Featuring options ranging from pasta and pizza to burgers, our platform leverages cutting-edge technologies such as Next, Tailwind, Framer Motion, and Typescript. We stand out with an efficient inventory management system powered by Zustand and Prisma. Ensuring a secure and scalable shopping experience, we've integrated Stripe for seamless payment.",
    },
    {
        id: 3,
        title: 'Gifs API',
        url: 'https://react-gifs.vercel.app/',
        video_url: '/Gifs-Record.webm',
        desc: 'GifsApp, a React-powered gif search application, brings the joy of discovering and sharing gifs effortlessly. With a sleek design using Tailwind and Sass, it empowers users to search for their favorite gifs and easily copy the link for seamless sharing. Elevate your messaging game with GifsApp – where finding and sharing gifs has never been smoother!',
    },
    {
        id: 4,
        title: 'Heroes API',
        url: 'https://heroes-app-fawn.vercel.app/',
        video_url: '/HeroesApp.webm',
        desc: 'Explore the superhero universe with our React-powered application. Leveraging the Marvel and DC APIs, we provide detailed information about your favorite heroes. Dive into profiles, stories, and powers in an immersive experience. Immerse yourself in the world of superheroes with our interactive and action-packed application!',
    },
    {
        id: 5,
        title: 'Chat WebSockets',
        url: 'https://github.com/AdrianRMV/ChatSocket',
        video_url: '/chatSocket.webm',
        desc: 'Experience real-time communication with our React-based socket chat app. Utilizing MongoDB as the backend, and implementing live chat functionality with distributed systems using web sockets, it offers seamless and instant messaging. Elevate your chat experience with cutting-edge technology, connecting users through a robust and dynamic platform.',
    },
    {
        id: 6,
        title: 'Task Creator',
        url: 'https://adrianrmv.github.io/task-creator-react-app/',
        video_url: '/task-record.webm',
        desc: 'Boost your productivity with our task management app, crafted with TypeScript for enhanced organization. Seamlessly create and organize tasks, ensuring a clear and structured approach to your to-do list. Experience a more efficient way to tackle your day and stay on top of your priorities.',
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
