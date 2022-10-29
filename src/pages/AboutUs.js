import Footer from './Footer.js'
import './css/aboutus.css'
import aboutImg from './images/about-img.png'
import burger from './images/mayo_burger.jpg'

export default function AboutUs() {
    return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>About Us</title>
            <link rel="icon" href="resources/favicon.ico"/>
        </head>
        <body>
            <section class="about_section layout_padding">
              <div class="container ">
                <div class="row">
                  <div class="col-md-6">
                    <div class="img-box">
                      <img src={aboutImg} alt="Burger"/>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="detail-box">
                      <div class="heading_container">
                        <h2 class="hero-title-accent2">
                          We Are <strong class="hero-title-accent">All American!</strong> 
                        </h2>
                      </div>
                      <p class="hero-text">
                        Every year, about <strong>50 Billion</strong> of burgers are sold in the United States. That is how we how much America loves burgers. 
                        We are a family owned business that has been serving the best burgers in the area for over 20 years. We are proud to be a part of the community and we are happy to serve you.
                        From our family to yours, we hope you enjoy our burgers as much as we enjoy making them. We started as a small business and we have grown to be one of the best burger joints in the country.
                        Find out Why? Come visit us today!
                      </p>
                      <a href="#section2">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="hero-all-american">
              <div class="jumbotron jumbotron-fluid hero-text-box">
                <div class="container">
                  <h1 class="lead hero-classics">"We are all about the <strong>Classics!"</strong></h1>
                </div>
              </div>
            </section>
            <section class="about_section layout_padding" id="section2">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <div class="detail-box">
                      <p class="hero-text">
                        In 2018, <strong>Perry Smith</strong> and <strong>John Doe</strong> decided to open a burger joint in the heart of Salt Lake City.
                        They wanted to bring the best burgers to the people of Utah. Knowing that Utah is a state that loves burgers, they knew they had to make the best burgers in the state.
                        As computer science majors, they decided to follow the K.I.S.S paradigm and keep it simple. Using the classic American burger recipe, and the bet ingredients, they were able to create the ultimate burger.
                        That is how All American Burgers was born.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="img-box">
                      <img src={burger} alt="Mayo Chef"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer/>
        	<script src="index.js"></script>
        	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </body>
    </html>)
}