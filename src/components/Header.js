import React, { useState, useEffect } from 'react';
import hamburger from '../images/hamburger.png'
import '../css/Header.css'

function Header() {
      const [mobileMenuView, setmMV] = useState(false);

      useEffect(() => {
            if (mobileMenuView === false) {
                  document.getElementsByClassName("Header_nav")[0].style.display = "none"
                  document.getElementsByClassName("Header_hamburger")[0].style.left = "70%"
                  
            }
            else {
                  document.getElementsByClassName("Header_nav")[0].style.display = ""
                  document.getElementsByClassName("Header_hamburger")[0].style.left = "10%"
            }
      });

      const changeView = () => {
            setmMV(!mobileMenuView)
      }

      
            


      return (
            <header className="Header">
                  

                  <img className="Header_hamburger" src={hamburger} onClick={changeView} alt = "hamburger icon"/>

                  <nav className = "Header_nav">
                        <p>Home</p>
                        <p>About</p>
                        <p>Technologies</p>
                        <p>Projects</p>
                        <p>Contact</p>
                  </nav>

                  


            </header>
      );
}

export default Header;