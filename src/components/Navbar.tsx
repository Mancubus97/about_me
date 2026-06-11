import logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </nav>
  );
}
