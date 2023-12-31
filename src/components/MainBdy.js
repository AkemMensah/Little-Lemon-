import data from "../StaticData/data";

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
          <p className="param1">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
            ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
            nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
            quis ultricies. Sed euismod, nisl quis ultricies ultricies, nunc
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
            ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
            nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
            quis ultricies. Sed euismod, nisl quis ultricies ultricies, nuncd...
            <a href="/about.html">
              <button>Read More</button>
            </a>
          </p>
          <p className="param2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc, quis
            ultricies nisl nisl quis nisl. Sed euismod, nisl quis ultricies
            ultricies, nunc nisl ultricies nunc, quis ultricies nisl nisl quis
            nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed euismod, nisl
            lorem ipsum dolor sit amet...
            <a href="/about.html">
              <button>Read More</button>
            </a>
          </p>
        </div>
        <div className="hero-image">
          <img alt="Hero dish" src={images.hero_cake} />
        </div>
      </div>
      <a href="/booking-form">
        <button className="tbtn">Reserve a Table</button>
      </a>
      <div className="search">
        <input type="search" placeholder="Search item..." />
        <button>Search</button>
      </div>
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

function Highlights({ articles, title, orderBtnLabel }) {
  return (
    <>
      <div className="specials">
        <h1 className="intro">{title}</h1>
        <div className="articles">
          {/* <article className="special">
            <div className="image">
              <img alt="greek salad" src={data.highlights.specials.articles[0].image} />
            </div>
            <h5>
              Greek Salad <span>$13.5</span>
            </h5>
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit. nunc,
              quis ultricies nisl nisl quis nisl.
            </p>
            <button>Order A Delivery</button>
          </article> */}
          {articles.map((article) => (
            <article className="special">
              <div className="image">
                <img alt="greek salad" src={article.image} />
              </div>
              <h5>
                {article.title} <span>{article.price}</span>
              </h5>
              <p>{article.description}</p>
              <button>{orderBtnLabel}</button>
            </article>
          ))}
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
            <img alt="testimonial" src={images.michael} />
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
            <img alt="testimonial" src={images.joseph} />
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
            <img alt="testimonial" src={images.matheus} />
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
            quis ultricies.lorem ipsum dolor sit amet, consectetur adipiscing
            elit. nunc, quis ultricies nisl nisl quis nisl. Sed euismod, nisl
            quis ultricies ultricies, nunc nisl ultricies nunc, quis ultricies
            nisl nisl quis nisl. Sed euismod, nisl quis nisl nisl quis nisl. Sed
            euismod, nisl quis ultricies.
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
  // const highlights_title = data.highlights.specials.title;
  // const articles = data.highlights.specials.articles;
  // const orderBtnLabel=data.highlights.specials.orderBtnLabel;

  const { title, articles, orderBtnLabel } = data.highlights.specials;
  return (
    <>
      <HeroSection />
      <Orders />
      <Highlights
        title={title}
        articles={articles}
        orderBtnLabel={orderBtnLabel}
      />
      <Testimonials />
      <About />
    </>
  );
}

export default Main;
