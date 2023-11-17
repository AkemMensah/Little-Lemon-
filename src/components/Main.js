// import hero_cake from "../images/hero_cake.jpg";
import * as images from "../images/index";
import couples from "../images/couples.png";
import heroStyle from "../styles/hero.css";


function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1 style={{color:"#F4CE14"}}>Little Lemon</h1>
        <h3>CHICAGO</h3>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
          ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
          ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
          nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
          quis ultricies.
        </p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img alt="Hero dish" height="150" width="300" src={images.hero_cake} />
      </div>
    </div>
  );
}

function Orders() {
  return (
    <div className="orders">
      <h1> Order For Delivery</h1>
      <button>Breakfast</button>
      <button>Lunch</button>
     <button>Brunch</button>
      <button>Dinner</button>
      <button>A La Carte</button>
    </div>
  );
}

function Highlights() {
  return (
    <>
      <div className="specials">
        <p>This Weeks Specials!</p>
        <article className="special">
          <div className="image">
            <img
              alt="greek salad"
              height="100"
              width="100"
              src={images.vegetables}
            />
          </div>
          <h5>Greek Salad $13.5</h5>
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
              height="100"
              width="100"
              src={images.tomato_cake}
            />
          </div>
          <h5>Brushatta $11.5</h5>
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
              height="100"
              width="100"
              src={images.lemon_fish}
            />
          </div>
          <h5>Grilled Fish  $13.5</h5>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl.
          </p>
          <button>Order A Delivery</button>
        </article>
      </div>
    </>
  );
}

function Testimonials(){
    return(
        <div className="testimonials">
            <h1>Testimonials</h1>
            <article className="testimonial">
                <div className="image">
                    <img alt="testimonial" height="100" width="100" src={images.michael}/>
                </div>
                <h5>Cathrine Sulif</h5>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
                    ultricies nisl nisl quis nisl.
                </p>
            </article>
            <article className="testimonial">
                <div className="image">
                    <img alt="testimonial" height="100" width="100" src={images.joseph}/>
                </div>
                <h5>Joseph Tim</h5>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
                    ultricies nisl nisl quis nisl.
                </p>
            </article>
            <article className="testimonial">
                <div className="image">
                    <img alt="testimonial" height="100" width="100" src={images.matheus}/>
                </div>
                <h5>Matheus Naya</h5>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
                    ultricies nisl nisl quis nisl.
                </p>
            </article>
            </div>
            );
    }

    function About() {
        return (
          <div className="about">
            <div className="about-text">
              <h1>Little Lemon</h1>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
                ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
                ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
                nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
                quis ultricies.
              </p>
              <button href="./about.html">Read More</button>
            </div>
            <div className="about-image">
              <img alt="about" height="100" width="100" src={couples} />
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
      <Testimonials/>
        <About/>
    </>
  );
}

export default Main;
