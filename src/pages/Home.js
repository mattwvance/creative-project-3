import { Outlet, Link } from "react-router-dom"
import './css/home.css'
import Footer from "./Footer"
import flag from './images/flag.svg'

export default function Home() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>All American</title>
      </head>
      <body>
        <div class='home-page-container'>
          <div class='home-page-content'>
            <h1 class='btn-header'>America's</h1>
            <h1 class='btn-header'>Best</h1>
            <h1 class='btn-header'>Burger</h1>
            <div class='btn-container'>
              <button class='home-page-button' type='button'><Link class='btn-text' to="/Menu">Order Now</Link></button>
            </div>
          </div>
          <img id='flag' src={flag} alt='American Flag'/>
        </div>
        <Footer/>
      	<script src="index.js"></script>
      	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </body>
    </html>);
}