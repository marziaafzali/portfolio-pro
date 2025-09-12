import './Navbar.css';
import logo from '../assets/logo.png';
import iconb from '../assets/iconb.png';
import {Link} from 'react-scroll';
;
function Navbar() {
  return(
  
  <nav className='navbar'>
   <img src={logo} alt="logo "  className='logo'/>
   <div className='desktopMenu'>
    <Link className='desktopMenulistItem'>Home</Link>
    <Link className='desktopMenulistItem'>About</Link>
    <Link className='desktopMenulistItem'>Profile</Link>
    <Link className='desktopMenulistItem'>Projects</Link>
   </div>
   <button className="desktopMenuBtn">
    <img src={iconb} alt='' className='desktopeMnuImg'/> Contact Me </button>
  </nav>


  )
}

export default Navbar;
