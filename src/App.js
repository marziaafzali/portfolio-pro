import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
       <Navbar />
      <Header 
        name="Marzia"
        title="Website Designer"
        message="I am a skilled web designer passionate about creating modern, responsive websites."
      />
      <About/>
      <Projects/>
      <Footer/>
  
    </div>
  );
}

export default App;
