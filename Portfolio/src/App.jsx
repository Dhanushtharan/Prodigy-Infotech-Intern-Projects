import Navbar from './component/navbar';
import Home from './component/home';
import About from './component/about';
import Projects from './component/project';
import Contact from './component/contact';
import Footer from './component/footer';
import Skills from './component/skills';
import Resume from './component/resume';
import BackToTopButton from './component/BackToTopButton';


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Resume />
      <BackToTopButton />
      <Footer />
    </>
  );
};

export default App;
