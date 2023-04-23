import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
   const [click, setClick] = React.useState(false);
   const handleClick = () => setClick(!click);
   const Close = () => setClick(false);

 return (
   <div>
      <div className={click ? "main-container" : ""}  onClick={()=>Close()}>
         <nav className="navbar" onClick={e => e.stopPropagation()}>
            <div className="nav-container">
                <NavLink to={'/'} className="nav-logo"> 
                </NavLink>
               
               <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <NavLink 
                     to="/" 
                     className="nav-links"
                     >Home</NavLink>

                  </li>
                  <li className="nav-item">
                     <NavLink to="/lana-del-rey" className="nav-links">Lana Del Rey</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/bugatti"  className="nav-links">Bugatti</NavLink>
                  </li>
                  <li className="nav-item"> 
                     <NavLink to="/recipes"  className="nav-links">Recipes</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/contact"  className="nav-links">Contact</NavLink>
                  </li>
               </ul>
               <div className="nav-icon" onClick={handleClick}>
                 <FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
               </div>
            </div>
         </nav>
      </div>
   </div>
    
 );
};

export default NavBar;