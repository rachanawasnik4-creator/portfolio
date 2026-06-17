import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen">

      <Background />

      <Navbar />

      <main>

        <Hero />

        <About />

        <Services />

        <Skills />

        <Projects />

        <Experience />

        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;