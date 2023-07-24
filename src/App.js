import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plan from './components/Plans/Plan';
import Progarmme from './components/Programme/progarmme';
import Reasons from './components/Reasons/Reasons';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
         <Hero />
         <Progarmme />
         <Reasons />
         <Plan />
         <Testimonial />
         <Join />
         <Footer />
    </div>
  );
}

export default App;
