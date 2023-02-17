import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import logo from '../../Assets/logo.png'


export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark  p-2">
  <div className="container">
    <NavLink className="navbar-brand " to='/'><img src= {logo} />Game Over</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ms-5 ps-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className= { ({isActive}) => isActive ? "nav-link active" : "nav-link"}  to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={ ({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/all">All</NavLink>
        </li>
        <li className="nav-item dropdown">
        <NavLink className={ ({isActive}) => isActive ? "nav-link active" : "nav-link dropdown-toggle"} to='/platforms' id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Platforms
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/pc">Pc</Link></li>
            <li><Link className="dropdown-item" to="/browser">Browser</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className={ ({isActive}) => isActive ? "nav-link active" : "nav-link dropdown-toggle"} to="/sortby" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Sort-by
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/release-date">release-date</Link></li>
            <li><Link className="dropdown-item" to="/Popularity">Popularity</Link></li>
            <li><Link className="dropdown-item" to="/alphabetical">alphabetical</Link></li>
            <li><Link className="dropdown-item" to="/relevance">relevance</Link></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className={ ({isActive}) => isActive ? "nav-link active" : "nav-link dropdown-toggle"} to="/categories" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Categories
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/rating">rating </Link></li>
            <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/Social">Social</Link></li>
            <li><Link className="dropdown-item" to="/Shooter">Shooter</Link></li>
            <li><Link className="dropdown-item" to="/Open-World">Open-World</Link></li>
            <li><Link className="dropdown-item" to="/Zombie">Zombie</Link></li>
            <li><Link className="dropdown-item" to="/fantasy">fantasy</Link></li>
            <li><Link className="dropdown-item" to="/action-rpg">action-rpg</Link></li>
            <li><Link className="dropdown-item" to="/action">action</Link></li>
            <li><Link className="dropdown-item" to="/flight">flight</Link></li>
            <li><Link className="dropdown-item" to="/battle-royale">battle-royale</Link></li>

          </ul>
        </li>
    
      </ul>
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
      <li >
        <Link class="btn logout " to="/login">Log Out</Link>
      </li>
       
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}
