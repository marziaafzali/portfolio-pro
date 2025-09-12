import './projects.css';
import app from '../assets/app.jpg';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';

const projects = [
  {
    name: "Portfolio Website",
    image: project1,
    description: "A personal portfolio site built with React.",
    liveLink: "https://your-portfolio-demo.com",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },
  {
    name: "Todo App",
    image: project2,
    description: "A simple to-do app with CRUD features.",
    liveLink: "https://todo-demo.com",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    name: "E-commerce Mockup",
    image: project3,
    description: "Frontend design for a mock e-commerce site.",
    liveLink: "#",
    techStack: ["React", "Bootstrap"],
    featured: true,
  },
  {
    name: "Blog Platform",
    image: project4,
    description: "A mock blog system with posts and comments.",
    liveLink: "#",
    techStack: ["React", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    name: "Weather App",
    image: project5,
    description: "Fetches weather data from an API.",
    liveLink: "#",
    techStack: ["React", "API", "CSS"],
    featured: false,
  },
  {
    name: "Chat Application",
    image: app,
    description: "A real-time chat app with user authentication.",
    liveLink: "#",
    techStack: ["React", "Firebase", "TailwindCSS"],
    featured: true,
  },
];

function Projects() {
  return (
    <section id="works">
      <h2 className="workstitle">My Projects</h2>
      <span className="worksDesc">
        I am a skilled and passionate designer with experience in creating visually
        appealing and user-friendly websites. I have a strong understanding of
        design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript,
        as well as design software such as Adobe Photoshop and Illustrator.
      </span>

      <div className="worksImgs">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            {project.featured && <span className="badge">🌟 Featured</span>}

            <img className="worksImg" src={project.image} alt={project.name} />

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <div className="techStack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="techBadge">{tech}</span>
              ))}
            </div>

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="worksbtn"
            >
              View Live
            </a>
          </div>
        ))}
      </div>

      <button className="worksbtn">See More</button>
    </section>
  );
}

export default Projects;
