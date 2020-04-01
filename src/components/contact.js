import React, { Component } from 'react'
export default class Contact extends Component {
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
              <li><a href="projects"><span><small>03</small>Projects</span></a></li>
              {/*<li><a href="blog"><span><small>04</small>Blog</span></a></li>*/}
              <li className="active"><a href="contact"><span><small>04</small>Contact</span></a></li>
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
    <section className="ftco-section contact-section">
  <div className="container mt-5">
    <div className="row d-flex mb-5 contact-info">
      <div className="col-md-12 mb-4">
        <h2 className="h4">Questions? Job Opportunities? Buisness Proposals? Send me an email!</h2>
      </div>
      {/*<div className="w-100" />
      <div className="col-md-3">
        <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
      </div>
      <div className="col-md-3">
        <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
      </div>
      <div className="col-md-3">
        <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
      </div>
      <div className="col-md-3">
        <p><span>Website:</span> <a href="#">yoursite.com</a></p>
      </div>
    </div>*/}
    </div>
    <div className="row block-9">
      <div className="col-md-6 pr-md-5">
        <form action="https://formspree.io/xzbapnjj" method="POST">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" required name = "name"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Email" required name = "email"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" required name = "subject"/>
          </div>
          <div className="form-group">
            <textarea required name="message" id cols={30} rows={7} className="form-control" placeholder="Message" />
          </div>
          <div className="form-group">
            <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
          </div>
        </form>
      </div>
      {/*<div className="col-md-6" id="map" />*/}
    </div>
  </div>
</section>
    </div>
    </div>
  );
  }
}
