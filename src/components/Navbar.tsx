import { useNavigate } from 'react-router-dom'
import logo_v4 from '../assets/silvijndevlogo_v4.png'

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <>
    <nav className="navbar">
      <img src={logo_v4} alt="Logo" className="navbar-logo" />
      <div className="navbar-links">
        <a href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          About
        </a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
          Contact
        </a>
      </div>
    </nav>
    </>
  );
}
