import { useNavigate } from 'react-router-dom'
import logo_v4 from '../assets/silvijndevlogo_v4.png'

export default function Navbar() {
    const navigate = useNavigate();
  return (
    <>
    <nav className="navbar">
      <button 
        className="navbar-logo-btn" 
        onClick={() => navigate('/')}>
          <img src={logo_v4} alt="Logo" className="navbar-logo" />
      </button>
      <div className="navbar-links">
        <a className="default-text" href="#home" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
          About
        </a>
        <a className="default-text" href="#projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>
          Projects
        </a>
        <a className="default-text" href="#contact" onClick={(e) => { e.preventDefault(); navigate('/#contact'); }}>
          Contact
        </a>
      </div>
    </nav>
    </>
  );
}
