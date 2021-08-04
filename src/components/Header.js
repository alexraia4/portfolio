import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
      return (
            <header className="Header">
                  <div className="Header_me">
                        <div className="Header_pic"/>
                        <Link to="/" className="Header_title"><h1>Alexander Raia</h1></Link>
                  </div>
                  <nav className="Header_links">
                        <a href="https://docs.google.com/document/d/1o2CK0zm48t1kXBYujEKx1a52jLxJ2-0F2iRdn_M3xkY/edit?usp=sharing" className="Header_link"><p>Resumé</p></a>
                        <Link to="/projects" className="Header_link"><p>Projects</p></Link>
                        <Link to="/contact" className="Header_link"><p>Contact</p></Link>
                  </nav>
            </header>
      );
}

export default Header;