import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='container'><nav>
    <div class="logo">
        <img src="logo.svg" alt="Logo Image"/>
    </div>
    <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
    </div>
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><button class="login-button" href="#">Login</button></li>
        <li><button class="join-button" href="#">Join</button></li>
    </ul>
</nav>

</div>
  )
}

export default NavBar