import { useState, useEffect } from "react";
import './Navbar.css';
import person from '../assets/person.jpg';
import {Link} from 'react-scroll';

function Header({ name, title, message }) {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different."
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);



  return (
  <section id='intro'>
   <div className='introContent '>
    <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introName'>{name}</span>
      <br/>{title} </span>
      <p className='introPara'>{message}</p>
      <p className="introPara">"{quote}"</p>
      <Link> <button className='btn'>Hire me </button> </Link>
   </div>
   <img src={person} alt='profile' className='bg'/>
   
  </section>
  )
}

export default Header;
