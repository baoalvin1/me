import React, { Component } from 'react'
export default class Projects extends Component {
  render() {
    return (
      <div>

  <nav id="colorlib-main-nav" role="navigation"> {/* nav.js */}
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
    <div className="js-fullheight colorlib-table">
      <div className="img" style={{backgroundImage: 'url(images/alvinbao5.jpg)'}} />
      <div className="colorlib-table-cell js-fullheight">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            <h1 className="mb-4"><a href="home" className="logo">Alvin Bao</a></h1>
            <ul>
              <li><a href="home"><span><small>01</small>Home</span></a></li>
              <li><a href="about"><span><small>02</small>Resume</span></a></li>
              {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
              <li className="active"><a href="projects"><span><small>03</small>Projects</span></a></li>
              {/*<li><a href="blog"><span><small>04</small>Blog</span></a></li>*/}
              <li><a href="contact"><span><small>04</small>Contact</span></a></li>
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
      <a href="https://github.com/k-shenoy/SocialDistancing" className="image order-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url("images/toronto.jpg")'}} data-scrollax=" properties: { translateY: '-30%'}">
        <div className="icon d-flex text-center justify-content-center align-items-center">
          <span className="icon-search" />
        </div>
      </a>
      <div className="text order-1">
        <h4 className="subheading">Social Distancing Android App</h4>
        <h2 className="heading"><a href="https://github.com/k-shenoy/SocialDistancing">Distance Better</a></h2>
        <p> This project aimed to help people effectively practice social distancing guidelines as restictions were being lessened by
        aggregating camera facial recognition data to show realtime updates of large gatherings of people. I was responsible for setting up the Firebase Realtime Database and I used Android Studio to develop the app. I was also
        responsible for finding datasets on traffic camera locations for the computer vision algorithm</p>
        <p><a href="https://github.com/k-shenoy/SocialDistancing">View Project in Github</a></p>
      </div>
    </div>
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
          I was responsible for the frontend development of webapp using PyQt5 React and Node.js.</p>
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
    {/*<div className="row mt-5">
      <div className="col text-center">
        <div className="block-27">
          <ul>
            <li><a href="#">&lt;</a></li>
            <li className="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </div>*/}
  </div>
</section>

  </div>
</div>
);
}
}
