import { Link } from 'react-router-dom'
import '../css/Header.css'

function Header() {
      return (
            <header className="Header">
                  <p>Home</p>
                  <p>About</p>
                  <p>Technologies</p>
                  <p>Projects</p>
                  <p>Contact</p>
            </header>
      );
}

export default Header;