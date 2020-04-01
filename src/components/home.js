import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
      <div>

  <nav id="colorlib-main-nav" role="navigation"> {/* nav.js */}
    <a className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
    <div className="js-fullheight colorlib-table">
      <div className="img" style={{backgroundImage: 'url(images/alvinbao5.jpg)'}} />
      <div className="colorlib-table-cell js-fullheight">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            <h1 className="mb-4"><a href="home" className="logo">Alvin Bao</a></h1>
            <ul>
              <li className="active"><a href="/me/home"><span><small>01</small>Home</span></a></li>
              <li><a href="/me/about"><span><small>02</small>Resume</span></a></li>
              {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
              <li><a href="/me/projects"><span><small>03</small>Projects</span></a></li>
              {/*<li><a href="blog"><span><small>04</small>Blog</span></a></li>*/}
              <li><a href="/me/contact"><span><small>04</small>Contact</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div id="colorlib-page">
    <header> {/* Home.js Start */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <a className="colorlib-logo" href="home"><span className="logo-img" style={{backgroundImage: 'url(images/alvinbao.jpg)'}} />Alvin Bao</a>
            </div>
            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
          </div>
        </div>
      </div>
    </header>
  </div>

  <section className="home-slider owl-carousel js-fullheight">
    <div className="slider-item js-fullheight">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <p><a className="scroll">Hello! I'm</a></p>
            <h1 className="mb-3" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Alvin Bao</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item js-fullheight">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <p><a className="scroll">I'm a</a></p>
            <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Software Developer</h1>
            <p><a className="scroll">from Cary, North Carolina</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item js-fullheight">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <p><a className="scroll">I'm an</a></p>
            <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Undergraduate Student</h1>
            <p><a className="scroll">at the Georgia Institute of Technology</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-item js-fullheight">
      <div className="overlay" />
      <div className="container">
        <div className="row slider-text align-items-center text-center justify-content-center" data-scrollax-parent="true">
          <div className="col-md-12 ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-3" data-scrollax="properties: {translateY: '30%', opacity: 1.6}">Scroll Down</h1>
            <p><a className="scroll">for more information</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END slider */}
  <section className="ftco-section about-section">
    <div className="container">
      <div className="row d-flex" data-scrollax-parent="true">
        <div className="col-md-4 author-img" style={{backgroundImage: 'url(images/alvinbao2.jpg)'}} data-scrollax=" properties: { translateY: '-70%'}" />
        <div className="col-md-2" />
        <div className="col-md-6 wrap ftco-animate">
          <div className="about-desc">
            <h1 className="bold-text">About</h1>
            <div className="p-5">
              <h2 className="mb-5">Hi! I'm Alvin Bao</h2>
              </div>


              </div>
              <div className="p-5">
              <p>I'm currently an undergraduate student majoring in computer science at Georgia Tech. I love attending hackathons and taking on challenging projects.
              I have experience in Python, Java, C++, JavaScript, HTML, CSS, Node.js, and React which is what this website was built in.
              If you want to find out more about me click on the links below!</p>
              <p><a href="about">Check out my resume</a></p>
              <p><a href="https://drive.google.com/file/d/1De1usTqS7iGcFO3mYjsQrYrfjFjv3xnH/view?usp=sharing">Download my resume</a></p>
              <ul className="ftco-footer-social list-unstyled mt-4">
                <li><a href="https://www.linkedin.com/in/alvinbao"><span className="icon-linkedin" /></a></li>
                <li><a href="https://github.com/baoalvin1"><span className="icon-github" /></a></li>
                <li><a href="https://www.instagram.com/alvinbao/?hl=en"><span className="icon-instagram" /></a></li>
              </ul>
              <h5>Contact me here!</h5>
              <p>Email: <a href="mailto:abao9@gatech.edu?Subject=Website%20Contact">abao9@gatech.edu</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span>What I do</span>
          <h2>My Areas of Interest</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon mb-3"><span className="icon-layers" /></div>
            <div className="media-body">
              <h3 className="heading">Fullstack Development</h3>
              <h3 className="heading">Frontend Development</h3>
              <h3 className="heading">Mobile Development</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon mb-3"><span className="icon-gears" /></div>
            <div className="media-body">
              <h3 className="heading">Competitive Programming</h3>
              <h3 className="heading">Data Visualization</h3>
              <h3 className="heading">Machine Learning</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex align-self-stretch ftco-animate">
          <div className="media block-6 services p-3 py-4 d-block text-center">
            <div className="icon mb-3"><span className="icon-code" /></div>
            <div className="media-body">
              <h3 className="heading">Python</h3>
              <h3 className="heading">React</h3>
              <h3 className="heading">C++</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section">
<div className="container mt-5">
  <div className="row justify-content-center mb-5 pb-5">
    <div className="col-md-7 text-center heading-section ftco-animate">
      <span>Projects</span>
      <h2>A collection of my favorite works</h2>
    </div>
  </div>
  <div className="row no-gutters">
    <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="https://github.com/k-shenoy/GameRank" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/ugahacks.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
        <div className="icon d-flex text-center justify-content-center align-items-center">
          <span className="icon-search" />
        </div>
      </a>
      <div className="text">
        <h4 className="subheading">Machine Learning WebApp</h4>
        <h2 className="heading"><a href="https://github.com/k-shenoy/GameRank">Game Rank</a></h2>
        <p>This project used game scores and attendance to predict watchability of NBA and NFL games. Winner of Best Use of Google Cloud at UGAHacks5.
        I was esponsible for the frontend development of webapp using PyQt5 React and Node.js.</p>
        <p><a href="https://github.com/k-shenoy/GameRank">View Project in Github</a></p>
      </div>
    </div>
    <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="https://github.com/k-shenoy/Data-based-Banking" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/hacklytics.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
        <div className="icon d-flex text-center justify-content-center align-items-center">
          <span className="icon-search" />
        </div>
      </a>
      <div className="text order-1">
        <h4 className="subheading">Business Location Predictor</h4>
        <h2 className="heading"><a href="https://github.com/k-shenoy/Data-based-Banking">Data Based Banking</a></h2>
        <p> This project used bank and atm location data to predict new locations for bank branches and atms. For this project I built a neural network using TensorFlow and Keras in GoogleColab. I merged data sets from CapitalOne’s API using
        Python and pandas. This project used Python modules: Pandas, Scikitlearn, and seaborn. It was submitted to Hacklytics a datathon at Georgia Tech</p>
        <p><a href="https://github.com/k-shenoy/Data-based-Banking">View Project in Github</a></p>
      </div>
    </div>
    <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="https://github.com/baoalvin1/On-The-Move" className="image d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/coding.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
        <div className="icon d-flex text-center justify-content-center align-items-center">
          <span className="icon-search" />
        </div>
      </a>
      <div className="text">
        <h4 className="subheading">Data Visualizing WebApp</h4>
        <h2 className="heading"><a href="https://github.com/baoalvin1/On-The-Move">On The Move</a></h2>
        <p>My first hackathon project! We built an application that gave data visualizations based on various factors of affluence
        like population, income, and housing cost per county. I used HTML, CSS, and Javascript to link from the website to the data visualizations
        in R.</p>
        <p><a href="https://github.com/baoalvin1/On-The-Move">View Project in Github</a></p>
      </div>
    </div>
    <div className="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
      <a href="https://github.com/baoalvin1/amazon-price-tracker" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/alvinbao3.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
        <div className="icon d-flex text-center justify-content-center align-items-center">
          <span className="icon-search" />
        </div>
      </a>
      <div className="text order-1">
        <h4 className="subheading">Web Scraper</h4>
        <h2 className="heading"><a href="https://github.com/baoalvin1/amazon-price-tracker">Amazon Price Tracker</a></h2>
        <p> This is an example of a quick side project I put together in Python. I wanted to buy a pair of AirPod Pros but they were really expensive so I decided to write
        a program that would send me an email when the price dropped below a certain point. I used Python modules: requests, Beautiful Soup, and smtplib</p>
        <p><a href="https://github.com/baoalvin1/amazon-price-tracker">View Project in Github</a></p>
      </div>
    </div>
  </div>
</div>
</section>
  {/*<section className="ftco-section ftco-counter" id="section-counter">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-md-7 text-center heading-section ftco-animate">
          <span>Portfolio</span>
          <h2>I love to share my achievements</h2>
        </div>
      </div>
      <div className="row d-flex justify-content-start">
        <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text">
              <span className="ftco-label">Clients</span>
              <strong className="number" data-number={420}>0</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 col-sm-5 counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text">
              <span className="ftco-label">Project done</span>
              <strong className="number" data-number={890}>0</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-end">
        <div className="col-md-5 counter-wrap ftco-animate">
          <div className="block-18">
            <div className="text">
              <span className="ftco-label">Cups of coffee</span>
              <strong className="number" data-number={1000}>0</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>*/}
</div>
    );
  }
}
