import Footer from './Footer'
import './css/catering.css'
import './css/grid.css'
import iphone from './images/app-iPhone.png'
import download from './images/download-app.svg'
import downloadAndroid from './images/download-app-android.png'
import meal1 from './images/meal1.jpg'
import meal2 from './images/meal2.jpg'
import meal3 from './images/meal3.jpg'
import meal4 from './images/meal4.jpg'
import meal5 from './images/meal5.jpg'
import meal6 from './images/meal6.jpg'
import meal7 from './images/meal7.jpg'
import meal8 from './images/meal8.jpg'
import customer1 from "./images/customer-1.jpg"
import customer2 from "./images/customer-2.jpg"
import customer3 from "./images/customer-3.jpg"

export default function Catering() {
    return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Catering</title>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <link rel="icon" href="resources/favicon.ico"/>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossorigin="anonymous"/>
        </head>
        <body>
            <section class="hero-catering">
                <div class="jumbotron jumbotron-fluid hero-text-box">
                  <div class="container">
                    <h1 class="hero-classics">Best <strong>Catering</strong> Service!</h1>
                  </div>
                </div>
            </section>
    
            <section class="section-steps">
                <div class="row">
                    <h2>How to Cater? &mdash; Simple as 1, 2, 3</h2>
                </div>
                <div class="row">
                    <div class="col span-1-of-2 steps-box">
                        <img src={iphone} alt="Omnifood app on iPhone" class="app-screen"/>
                    </div>
                    <div class="col span-1-of-2 steps-box">
                        <div class="works-step clearfix">
                            <div>1</div>
                            <p>Choose the plan that best fits your event needs.</p>
                        </div>
                        <div class="works-step clearfix">
                            <div>2</div>
                            <p>Create your own menu, or use one of our pre-built ones, select your time and place.</p>
                        </div>
                        <div class="works-step clearfix">
                            <div>3</div>
                            <p>Pay and we will be on time at your event</p>
                        </div>
                        <a href='#' class="btn-app"><img src={download} alt="App Store Button"/></a>
                        <a href='#' class="btn-app"><img src={downloadAndroid} alt="Play Store Button"/></a>
                    </div>
                </div>
            </section>
    
            <section class="section-meals">
                <ul class="meals-showcase clearfix">
                    <li>
                        <figure class="meal-photo">
                            <img src={meal1} alt="Korean bibimbap with egg and vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal2} alt="Simple italian pizza with cherry tomatoes"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal3} alt="Chicken breast steak with vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal4} alt="Autumn pumpkin soup"/>
                        </figure>
                    </li>
                </ul>
                <ul class="meals-showcase clearfix">
                    <li>
                        <figure class="meal-photo">
                            <img src={meal5} alt="Paleo beef steak with vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal6} alt="Healthy baguette with egg and vegetables"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal7} alt="Burger with cheddar and bacon"/>
                        </figure>
                    </li>
                    <li>
                        <figure class="meal-photo">
                            <img src={meal8} alt="Granola with cherries and strawberries"/>
                        </figure>
                    </li>
                </ul>
            </section>
            <section class="section-testimonials">
              <div class="row">
                  <h2>What our customers say About Us</h2>
              </div>
              <div class="row">
                  <div class="col span-1-of-3">
                      <blockquote>
                          All American Burgers is awesome! Easily the best burger I have ever had. I was so impressed by their food quality and service. I will definitely be back!
                          <cite><img src={customer1} alt='customer 1'/>Josh Schmoe</cite>
                      </blockquote>
                  </div>
                  <div class="col span-1-of-3">
                      <blockquote>
                         All American is the best place for a late night burger. I love the fact that they deliver to my house. I have never had a bad experience with them.
                          <cite><img src={customer2} alt='customer 2'/>Jane Doe</cite>
                      </blockquote>
                  </div>
                  <div class="col span-1-of-3">
                      <blockquote>
                        All American is what a classic burger place should be. I love the fact that they have a wide variety of burgers to choose from. My favorite Burger Joint!
                      <cite><img src={customer3} alt='customer 3'/>Cosmo Chapman</cite>
                      </blockquote>
                  </div>
              </div>
            </section>
            <Footer/>
        	<script src="index.js"></script>
        	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </body>
    </html>    
    )
}