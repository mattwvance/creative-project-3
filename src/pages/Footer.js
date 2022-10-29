// import { Outlet, Link } from "react-router-dom"
import './css/footer.css'

export default function Footer() {
  return (
    <div class='footer-container'>
      <div class="footer-column">
        <div class="footer-header">
          <b>Contact us</b>
        </div>
        <div class="footer-item">
          <p>allamerican@gmail.com</p>
        </div>
        <div class='footer-item'>
          <p>801-422-2222</p>
        </div>
        <div class='footer-item'>
          <p>@allamerican</p>
        </div>
      </div>
      <div class="footer-column">
        <div class="footer-header">
          <b>Resources</b>
        </div>
        <div class='footer-item'>
          <p><a href='menu.html'>Menu</a></p>
        </div>
        <div class='footer-item'>
          <p><a href='catering.html'>Catering</a></p>
        </div>
        <div class='footer-item'>
          <p><a href='catering.html'>About Us</a></p>
        </div>
      </div>
      <div class='footer-column'>
        <div class='footer-header'>
          <b>Visit us</b>
        </div>
        <div class='footer-item'>
          <p>222 West</p>
        </div>
        <div class='footer-item'>
          <p>300 South</p>
        </div>
        <div class='footer-item'>
          <p>Provo, UT, 84602</p>
        </div>
      </div>
    </div>  
  )
}