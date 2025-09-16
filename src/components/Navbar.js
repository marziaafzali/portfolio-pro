import './Navbar.css';
import logo from '../assets/logo.png';
import iconb from '../assets/iconb.png';

function Navbar() {
  return(
  
  <nav className='navbar'>
   <img src={logo} alt="logo "  className='logo'/>
   <div className='desktopMenu'>
    <a className='desktopMenulistItem'>Home</a>
    <a className='desktopMenulistItem'>About</a>
    <a className='desktopMenulistItem'>Profile</a>
    <a className='desktopMenulistItem'>Projects</a>
   </div>
   <button className="desktopMenuBtn">
    <img src={iconb} alt='' className='desktopeMnuImg'/> Contact Me </button>
  </nav>


  )
}

export default Navbar;
