import React, { Component } from 'react'
export default class About extends Component {
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
              <li className="active"><a href="about"><span><small>02</small>Resume</span></a></li>
              {/*<li><a href="services.html"><span><small>03</small>Services</span></a></li>*/}
              <li><a href="projects"><span><small>03</small>Projects</span></a></li>
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
          <section className="ftco-section about-section">
            <div className="container">
              <div className="row d-flex my-5" data-scrollax-parent="true">
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
                    While I love coding, my other hobbies include basketball, trombone, and reading. Fun fact: I was 4th chair trombone in the 2019 Honor Band of America.
                    If I'm not doing any of these things you can probably find me hanging out with my wonderful friends at Georgia Tech. Scroll down to read more!

                    </p>
                    <p><a href="https://drive.google.com/file/d/1De1usTqS7iGcFO3mYjsQrYrfjFjv3xnH/view?usp=sharing">Download my resume</a></p>
                    <ul className="ftco-footer-social list-unstyled mt-4">
                      <li><a href="#"><span className="icon-twitter" /></a></li>
                      <li><a href="#"><span className="icon-facebook" /></a></li>
                      <li><a href="#"><span className="icon-instagram" /></a></li>
                    </ul>
                    <h5>Contact me here!</h5>
                    <p>Email: <a href="mailto:abao9@gatech.edu?Subject=Website%20Contact">abao9@gatech.edu</a></p>
                    </div>
                </div>
              </div>
              <div className="row d-flex justify-content-end mt-5">
                <div className="col-md-10">
                  <div className="profile ftco-animate">
                    <h2 className="mb-4">Resume</h2>
                    <h4 className="mb-4">I'm a Software Developer from Cary, NC. I am the creative mind behind imaginative solutions.</h4>
                    <p>I am an avid learner and have experience with Frontend Development, Fullstack Development, Machine Learning, and Mobile Development</p>
                    {/*<div className="row my-5">
                      <div className="col-md-6">
                        <p><strong>Name:</strong> <span>Beckham Muff</span></p>
                        <p><strong>Address:</strong> <span>88 West 21th Street, Suite 721 New York NY 10016</span></p>
                        <p><strong>Phone:</strong> <span>(123)-456-789</span></p>
                      </div>
                      <div className="col-md-6">
                        <p><strong>Name:</strong> <span>Beckham Muff</span></p>
                        <p><strong>Address:</strong> <span>88 West 21th Street, Suite 721 New York NY 10016</span></p>
                        <p><strong>Phone:</strong> <span>(123)-456-789</span></p>
                      </div>
                    </div>*/}
                  </div>
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4"> Clubs and Leadership</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Georgia Tech ACM Programming Team<span> - General Member</span> </h4>
                        <p className="location">Atlanta, Georgia</p>
                      </div>
                      <div className="year">
                        <p>2019 - Present</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Georgia Tech iOS Development Team <span> - General Member</span> </h4>
                        <p className="location">Atlanta, Georgia</p>
                      </div>
                      <div className="year">
                        <p>2019 - Present</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Triangle Youth Jazz Ensemble <span> - Trombone Section Leader</span> </h4>
                        <p className="location">Raleigh, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>2017 - 2019</p>
                      </div>
                    </div>
                  </div>

                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4">Education</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>BS in Computer Science<span> - Georgia Institute of Technology</span> </h4>
                        <p className="location">Atlanta, Georgia</p>
                      </div>
                      <div className="year">
                        <p>Expected Grad: May 2023</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>High School Diploma<span> - Enloe High School</span> </h4>
                        <p className="location">Raleigh, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>Grad: June 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="exp mt-5 ftco-animate">
                    <h2 className="mb-4"> Work Experience</h2>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Pagarba<span> - Software Engineer Intern</span> </h4>
                        <p className="location">Marietta, Georgia</p>
                      </div>
                      <div className="year">
                        <p>Summer 2020</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Barista<span> - Starbucks</span> </h4>
                        <p className="location">Cary, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>2018 - 2019</p>
                      </div>
                    </div>
                    <div className="exp-wrap py-4">
                      <div className="desc">
                        <h4>Chinese School Tutor <span> - Cary Chinese School</span> </h4>
                        <p className="location">Cary, North Carolina</p>
                      </div>
                      <div className="year">
                        <p>2015 - 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 flex-column ftco-animate">
                <div className="col-md-8">
                  <h2 className="mb-4">My Skills</h2>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>Python</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}}>
                        <span>5/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Java</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>React</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>C++</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Node.js</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>HTML</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap">
                    <h4>CSS</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>4/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>JavaScript</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Swift</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Firebase</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Android Studio</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
                        <span>3/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>Tensorflow</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                  <div className="progress-wrap">
                    <h4>React Native</h4>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
                        <span>2/5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div></div>);
  }
}
