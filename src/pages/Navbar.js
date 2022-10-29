import './css/navbar.css'
import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
        <title>All American</title>
      </head>
      <body>
        <nav class="navbar navbar-expand-xl navbar-light nav-color">
          <b class="navbar-brand menu-header">All American</b>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item m-3">
                <Link class='menu-text' to="/">Home</Link>
              </li>
              <li class="nav-item m-3">
                <Link class='menu-text' to="/Menu">Menu</Link>
              </li>
              <li class="nav-item m-3">
                <Link class='menu-text' to="/Catering">Catering</Link>
              </li>
              <li class="nav-item m-3">
                <Link class='menu-text' to="/AboutUs">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet/>
      </body>
    </html>
  )
}