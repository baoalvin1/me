import React, { Component } from 'react'
export default class Footer extends Component {
  render() {
    return (
      <footer className="ftco-footer ftco-bg-dark ftco-section">
  <div className="container">
    <div className="row mb-5 justify-content-center">
      <div className="col-md-5 text-center">
        <div className="ftco-footer-widget mb-5">
          <ul className="ftco-footer-social list-unstyled">
            <li className="ftco-animate"><a href="https://www.linkedin.com/in/alvinbao"><span className="icon-linkedin" /></a></li>
            <li className="ftco-animate"><a href="https://github.com/baoalvin1"><span className="icon-github" /></a></li>
            <li className="ftco-animate"><a href="https://www.instagram.com/alvinbao/?hl=en"><span className="icon-instagram" /></a></li>
          </ul>
        </div>
        {/*<div className="ftco-footer-widget">
          <h2 className="mb-3">Contact Us</h2>
          <p className="h3 email"><a href="#">info@email.com</a></p>
        </div>*/}
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center">
        <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          This website is made with <i className="icon-heart" aria-hidden="true" style={{color: 'red'}} /> and inspired by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
      </div>
    </div>
  </div>
</footer>
    );
  }
}
