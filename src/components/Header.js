import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
      return (
            <header className="Header">
                  <Link to="/" className="Header_title"><h1>Alexander Raia</h1></Link>
                  <nav className="Header_links">
                        <Link to="/about" className="Header_link"><p>About</p></Link>
                        <Link to="/projects" className="Header_link"><p>Projects</p></Link>
                        <Link to="/contact" className="Header_link"><p>Contact</p></Link>
                  </nav>
            </header>
      );
}

export default Header;