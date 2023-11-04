import './app.scss';
import Navbar from './components/navbar/Navbar';
const App = () => {
    return (
        <div>
            <section id="Homepage">
                <Navbar />
            </section>
            <section id="Services">Parallax</section>
            <section id="Portfolio">Services</section>
            <section id="Contact">Parallax</section>
        </div>
    );
};

export default App;
