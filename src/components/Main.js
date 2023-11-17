// import hero_cake from "../images/hero_cake.jpg";
import * as images from "../images/index";
import couples from "../images/couples.png";
import heroStyle from "../styles/hero.css";
import ordersStyle from "../styles/orders.css";
import highlightsStyle from "../styles/highlights.css";
import testimonialsStyle from "../styles/testimonials.css";
import aboutStyle from "../styles/about.css";

function HeroSection() {
  return (
    <div className="hero">
      <div className="text-image">
        <div className="hero-text">
          <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
          <h3>CHICAGO</h3>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
            ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
            nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
            quis ultricies. Sed euismod, nisl quis ultricies ultricies, nunc
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
            ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
            nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
            quis ultricies. Sed euismod, nisl quis ultricies ultricies, nunc
            <a href="/about.html">
              <button>Read More</button>
            </a>
          </p>
        </div>
        <div className="hero-image">
          <img alt="Hero dish" src={images.hero_cake} />
        </div>
      </div>
      <button>Reserve a Table</button>
    </div>
  );
}

function Orders() {
  return (
    <div className="orders">
      <h1> Order For Delivery</h1>
      <ul>
        <a href="">
          <li>Breakfast</li>
        </a>
        <a href="">
          <li>Lunch</li>
        </a>
        <a href="">
          <li>Brunch</li>
        </a>
        <a href="">
          <li>Dinner</li>
        </a>
        <a href="">
          <li>A La Carte</li>
        </a>
      </ul>
    </div>
  );
}

function Highlights() {
  return (
    <>
      <div className="specials">
        <h1 className="intro">This Weeks Specials!</h1>
        <div className="articles">
        <article className="special">
          <div className="image">
            <img
              alt="greek salad"
              
              src={images.vegetables}
            />
          </div>
          <h5>Greek Salad <span>$13.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
        <article className="special">
          <div className="image">
            <img
              alt="Brushatta"
              
              src={images.tomato_cake}
            />
          </div>
          <h5>Brushatta <span>$11.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
        <article className="special">
          <div className="image">
            <img
              alt="Grilled Fish"
              height="300" 
              src={images.lemon_fish}
            />
          </div>
          <h5>Grilled Fish <span>$13.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>

        <article className="special">
          <div className="image">
            <img
              alt="greek salad"
              
              src={images.vegetables}
            />
          </div>
          <h5>Greek Salad <span>$13.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
        <article className="special">
          <div className="image">
            <img
              alt="Brushatta"
              
              src={images.tomato_cake}
            />
          </div>
          <h5>Brushatta <span>$11.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
        <article className="special">
          <div className="image">
            <img
              height="300"
              src={images.lemon_fish}
            />
          </div>
          <h5>Grilled Fish <span>$13.5</span></h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
        </div>
      </div>
    </>
  );
}

function Testimonials() {
  return (
    <div className="testimonials">
      <h1>Testimonials</h1>
      <div className="tests">
      <article className="testimonial">
        <div className="image">
          <img
            alt="testimonial"
            
            src={images.michael}
          />
        </div>
        <h5>Cathrine Sulif</h5>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl.
          <button>Read More</button>
        </p>
      </article>
      <article className="testimonial">
        <div className="image">
          <img alt="testimonial"  src={images.joseph} />
        </div>
        <h5>Joseph Tim</h5>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl.
          <button>Read More</button>
        </p>
      </article>
      <article className="testimonial">
        <div className="image">
          <img
            alt="testimonial"
            
            src={images.matheus}
          />
        </div>
        <h5>Matheus Naya</h5>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl.
          <button>Read More</button>
        </p>
      </article>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content">
      <div className="about-text">
        <h1>Little Lemon</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
          ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
          nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
          quis ultricies.lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
          ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
          nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
          quis ultricies.
        </p>
        <button href="./about.html">Read More</button>
      </div>
      <div className="about-image">
        <img alt="about" height="100" width="100" src={couples} />
        <p>Mrs and Mrs Little Lemon</p>
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <>
      <HeroSection />
      <Orders />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export default Main;
