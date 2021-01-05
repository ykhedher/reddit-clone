import React from 'react'
import logo from './assets/reddit-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
function Header() {
   return (
      <header className="header">
         <img className="header__logo" src={logo} alt="Reddit Logo" />
         <div className="header__search">
         <SearchIcon className="header__searchIcon"/>
            <input
               className="header__searchInput"
               type="text" placeholder="Search"
                />
         </div>
         <div className="header__nav">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
         </div>
      </header>
   )
}

export default Header
