
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <title>Lavish - Free Responsive Template</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <meta name="author" content="templatemo" />


        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>

      <Script src="js/jquery.js"></Script>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></Script>
      <Script src="js/jquery.fullPage.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/wow.min.js"></Script>
      <Script src="js/jquery.simple-text-rotator.js"></Script>
      <Script src="js/custom.js"></Script>
      <Script src="js/smoothscroll.js"></Script>

      <div id="fullpage">


        <div id="home" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 wow fadeIn" data-wow-delay="0.9s">
                <h3>Simple and Elegant</h3>
                <h1>Vikas Kag</h1>
                <h2 className="rotate"> WebDeveloper</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                <a href="#work" className="btn btn-default smoothScroll wow fadeInUp" data-wow-delay="1s">Get started</a>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
        <div id="work" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounce">
                <h2>WHAT I DO</h2>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-laptop"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Responsive Mobile</h3>
                    <p>Lavish CSS Template is designed by templatemo. Download, edit and use this layout.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-link"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">CSS Templates</h3>
                    <p>We provide a wide range of HTML5 templates for free. Please spread a word about us on social media.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
                <div className="media">
                  <div className="media-object media-left">
                    <i className="fa fa-paper-plane"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading">Photoediting</h3>
                    <p>Credits go to <a rel="nofollow" href="https://pixabay.com">Pixabay</a> and <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for images used in this free CSS website template.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="about" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
                <h2>ABOUT vikas kag</h2>
                <h4>WEB Designer and DEVELOPER</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                <p>Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
              <div className="col-md-6 col-xs-11 wow fadeInRight" data-wow-delay="0.9s">
                <span className="text-top">Web Design <small>95%</small></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "95%" }} ></div>
                </div>

                <span>SEO Stuffs <small>70%</small></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                </div>
                <span>HTLM5 & CSS3 <small>90%</small></span>
                <div className="progress">
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }} ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="portfolio" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="wow bounce">PORTFOLIO</h2>
              </div>
              <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img1.jpg" className="img-responsive" alt="portfolio img" />
                  <div className="portfolio-overlay">
                    <h4>Web Design</h4>
                    <h5>Author: Cindy</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img2.jpg" className="img-responsive" alt="portfolio img" />
                  <div className="portfolio-overlay">
                    <h4>Web App</h4>
                    <h5>Author: Linda</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img3.jpg" className="img-responsive" alt="portfolio img" />
                  <div className="portfolio-overlay">
                    <h4>Mobile App</h4>
                    <h5>Author: Kate</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img4.jpg" className="img-responsive" alt="portfolio img" />
                  <div className="portfolio-overlay">
                    <h4>Old Artwork</h4>
                    <h5>Author: Catherine</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-6 wow fadeIn" data-wow-delay="0.6s">
                <div className="portfolio-thumb">
                  <img src="images/portfolio-img5.jpg" className="img-responsive" alt="portfolio img" />
                  <div className="portfolio-overlay">
                    <h4>New Animation</h4>
                    <h5>Author: Kathy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="contact" className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <address>
                  <p className="contact-title">CONTACT ME</p>
                  <p><i className="fa fa-phone"></i> 090-080-0760</p>
                  <p><i className="fa fa-envelope-o"></i> info@company.com</p>
                  <p><i className="fa fa-map-marker"></i> 120 Old Walking Street, GL 16060</p>
                </address>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-10 wow fadeInUp" data-wow-delay="0.6s">
                <form role="form" method="post" action="#">
                  <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" />
                  <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" />
                  <textarea name="message" rows="5" className="form-control" id="message" placeholder="Your Message"></textarea>
                  <input name="send" type="submit" className="form-control" id="send" value="SEND ME" />
                </form>
              </div>
              <div className="col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow fadeIn" data-wow-delay="0.9s">
                <p>Copyright &copy; 2022 vikas Kag Personal Profile

                  . Designed by <a rel="nofollow noopener" href="https://templatemo.com">templatemo</a></p>
                <hr />
                <ul className="social-icon">
                  <li><a href="#" className="fa fa-facebook"></a></li>
                  <li><a href="#" className="fa fa-twitter"></a></li>
                  <li><a href="#" className="fa fa-instagram"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

      </div>

    </>
  )
}
