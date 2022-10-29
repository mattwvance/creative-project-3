import Footer from './Footer'
import './css/menu.css'
import chicken from './images/chicken.png'
import burger from './images/burger.jpg'

export default function Menu() {
    return (
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>Menu</title>
        </head>
        <body>
            <div class='menu-holder'>
                <div class='image-holder'>
                    <img id='burger' src={burger} alt='burger'/>
                </div>
                <p class='image-holder'>The Last Burger You Will Ever Need</p>
                <div class='menu-content'>
                    <div class='menu-item'>
                        <h4>The All American Burger</h4>
                        <div class='menu-price'>$5</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>Literally anything you can imagine. Served with fries.</p>
                    <hr id='delimeter'/>
                    <div class='menu-item'>
                        <h4>Grilled Chicken Sandwhich</h4>
                        <div class='menu-price'>$5</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>A lightly seasoned, grilled chicken patty with lettuce, mayo, and tomato.</p>
                    <hr class='border'/>
                    <div class='menu-item'>
                        <h4>Just the Fries</h4>
                        <div class='menu-price'>$5</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>A large helping of our legendary french fries.</p>
                    <hr class='border'/>
                </div>
                <div class='image-holder'>
                    <img id='chicken' src={chicken} alt='chicken'/>
                </div>
                <p class='image-holder'>Southern Homestyle Chicken Strips</p>
                <div class='menu-content'>
                    <div class='menu-item'>
                        <h4>Homestyle Chicken Strips</h4>
                        <div class='menu-price'>$5</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>Fried Chicken strips with french fries, toast, and bacon gravy.</p>
                    <hr id='delimeter'/>
                    <div class='menu-item'>
                        <h4>The Kids Meal</h4>
                        <div class='menu-price'>$3</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>A child sized version of the All American Burger with a small side of fries.</p>
                    <hr class='border'/>
                    <div class='menu-item'>
                        <h4>The Milkshake</h4>
                        <div class='menu-price'>$2</div>
                    </div>
                    <hr class='menu-divider'/>
                    <p>A large milkshake that comes in vanilla, strawberry, or chocolate.</p>
                    <hr class='border'/>
                </div>
            </div>
            <Footer/>
        	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        </body>
    </html>    
    )
}