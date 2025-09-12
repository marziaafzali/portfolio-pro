import { useState } from 'react';
import './Navbar.css';
import ui from '../assets/ui.jpg';
import app from '../assets/app.jpg';
import web from '../assets/web.jpg';

function About() { 
  const [showMore, setShowMore] = useState(false);

  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      
      <span className='skillDesc'>
        I am a skilled and passionate designer with experience in creating visually
        appealing and user-friendly websites.
        {showMore && (
          <>
            {" "}I have a strong understanding of design and a keen eye for detail.
            I am proficient in HTML, CSS, JavaScript, as well as design software such
            as Adobe Photoshop and Illustrator.
          </>
        )}
      </span>

      <button 
        className="toggleBtn"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Read Less" : "Read More"}
      </button>

      <div className='skillBars'>
        <div className='skillBar'>
          <img src={ui} className='skillBarImg' alt="UI/UX Design"/>
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>
              Crafting intuitive and engaging digital experiences that put users first.
              From wireframes to interactive prototypes, our UI/UX design process focuses
              on usability, accessibility, and visual appeal — ensuring every interaction
              feels seamless and meaningful.
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={web} className='skillBarImg' alt="Website Design"/>
          <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>
              Building modern, responsive websites that blend creativity with functionality.
              We design websites that not only look stunning but also deliver smooth navigation,
              fast performance, and optimized layouts across all devices, helping brands leave
              a lasting impression online.
            </p>
          </div>
        </div>

        <div className='skillBar'>
          <img src={app} className='skillBarImg' alt="App Design"/>
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>
              Designing sleek and user-friendly mobile applications tailored for iOS and Android.
              Our app design approach combines clean aesthetics with practical usability, creating
              apps that enhance user satisfaction while reflecting your brand’s identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
