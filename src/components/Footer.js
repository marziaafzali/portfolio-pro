import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={28} />
        </a>
      </div>

      <p>© {new Date().getFullYear()} Your Name</p>
    </footer>
  );
}

export default Footer;

