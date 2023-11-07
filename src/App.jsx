import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
const App = () => {
    return (
        <div>
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="Services">Parallax</section>
            <section id="Portfolio">Services</section>
            <section id="Contact">Parallax</section>
        </div>
    );
};

export default App;
