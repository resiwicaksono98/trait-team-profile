import { Link } from "react-router-dom";
import logo from "../../images/logo-2.svg";
import Shape1 from "../../images/mail.svg";
import News1 from "../../images/phone.svg";
import News2 from "../../images/map.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <img src={logo} alt="blog" />
                </div>
                <p>
                  Welcome to Trait. We are dedicated to providing excellent
                  service and innovative solutions for all your needs. Join us
                  in creating something amazing together.
                </p>

                <div className="social-widget">
                  <ul>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-twitter-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/blog">
                      Latest News
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/project">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget s2">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/project">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/testimonials">
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link onClick={ClickHandler} to="/contact">
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="widget contact-widget">
                <div className="widget-title">
                  <h3>Contact Us</h3>
                </div>
                <ul>
                  <li>
                    <img src={Shape1} alt="" />
                    <span>traitid@gmail.com</span>
                  </li>
                  <li>
                    <img src={News1} alt="" /> <span>(628) 9534-915-0087</span>
                  </li>
                  <li>
                    <img src={News2} alt="" />
                    <span>
                      Jakarta Indonesia <br />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row g-0">
            <div className="col col-lg-6 col-12">
              <p className="copyright">
                {" "}
                Copyright &copy; 2024 Trait . All Rights Reserved.
              </p>
            </div>
            <div className="col col-lg-6 col-12">
              <ul>
                <li>
                  <Link onClick={ClickHandler} to="/privace">
                    Privace & Policy
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} to="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
