import React, { useState } from 'react';
import hamburger from '../images/hamburger.png'
import '../css/Header.css'

function Header() {
      const [mobileMenuView, setmMV] = useState(false);

      const changeView = () => {
            setmMV(!mobileMenuView)
      }

      const checkView = () => {
            if (mobileMenuView === false) {
                  console.log("derp")
            }
      }


      return (
            <header className="Header">
                  
                  <nav className = "Header_nav">
                        <p>Home</p>
                        <p>About</p>
                        <p>Technologies</p>
                        <p>Projects</p>
                        <p>Contact</p>
                  </nav>

                  <img src={hamburger} onClick={changeView}/>

                  {checkView()}

            </header>
      );
}

export default Header;