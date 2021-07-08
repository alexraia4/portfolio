import '../css/Header.css';

function Header() {
      return (
            <header className="Header">
                  <h1 className="Header_title">Alexander Raia</h1>
                  <nav className="Header_links">
                        <p className="Header_link">About</p>
                        <p className="Header_link">Projects</p>
                        <p className="Header_link">Contact</p>
                  </nav>
            </header>
      );
}

export default Header;