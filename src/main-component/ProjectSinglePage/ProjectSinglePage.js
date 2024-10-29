import React, { Fragment } from "react";
// import Slider from "react-slick";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Logo from "../../images/logo-2.svg";
import Phone from "../../images/telephone.svg";
import CursorMaus from "../../components/CursorMaus/CursorMaus";

import Projects from "../../api/projects";

const ProjectSinglePage = (props) => {
  const { slug } = useParams();

  const ProjectSingle = Projects.find((item) => item.slug === slug);

  //   const settings = {
  //     dots: false,
  //     arrows: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     responsive: [
  //       {
  //         breakpoint: 991,
  //         settings: {
  //           arrows: false,
  //           dots: true
  //         }
  //       }
  //     ]
  //   };
  return (
    <Fragment>
      <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
      <PageTitle pageTitle={ProjectSingle.title} pagesub={"Project"} />
      <section className="project-single-area section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="project-single-wrap">
                <div className="project-single-item">
                  <div className="row align-items-center">
                    <div className="col-lg-7">
                      <div className="project-single-title">
                        <h3>{ProjectSingle.title}</h3>
                      </div>
                      <p>{ProjectSingle.description}</p>
                    </div>
                    <div className="col-lg-5">
                      <div className="project-single-content-des-right">
                        <ul>
                          <li>
                            Location :<span>{ProjectSingle.location}</span>
                          </li>
                          <li>
                            Client :<span>{ProjectSingle.client} </span>
                          </li>
                          <li>
                            Project Type :<span>{ProjectSingle.type}</span>
                          </li>
                          <li>
                            Website :
                            <span>
                              {" "}
                              {ProjectSingle?.website && (
                                <a
                                  href={ProjectSingle?.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open Website
                                </a>
                              )}
                            </span>
                          </li>
                          <li>
                            App :
                            <span>
                              {ProjectSingle?.appLink && (
                                <a
                                  href={ProjectSingle?.appLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Open App
                                </a>
                              )}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div className="project-single-main-img">
                    <Slider {...settings}>
                      <img src={Ssilde1} alt="img" height={500} width={500} />
                      <img src={Ssilde2} alt="img" />
                      <img src={Ssilde1} alt="img" />
                    </Slider>
                  </div> */}
                </div>
                <div className="project-single-item list-widget">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="project-single-title">
                        <h3>Our Strategies</h3>
                      </div>
                      <p>{ProjectSingle.strategy}</p>
                      <ul>
                        {ProjectSingle?.strategyList?.map((strategy, index) => (
                          <li key={index}>{strategy}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="project-single-item">
                  <div className="project-single-title">
                    <h3>Our approach</h3>
                  </div>
                  <p>{ProjectSingle.approach}</p>
                </div>
                {/* <div className="project-single-gallery">
                  <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="p-details-img">
                        <img src={Simg1} alt="img" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="p-details-img">
                        <img src={Simg2} alt="img" />
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="project-single-item list-widget">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="project-single-title">
                        <h3>Resieved goals</h3>
                      </div>
                      <ul>
                        {ProjectSingle?.resievedGoals?.map((goal, index) => (
                          <li key={index}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-lg-6 list-widget-s">
                      <div className="project-single-title">
                        <h3>Results</h3>
                      </div>
                      <ul>
                        {ProjectSingle?.results?.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <div className="project-single-item">
                  <div className="project-single-title">
                    <h3>Related Projects</h3>
                  </div>
                  <div className="project-single-item">
                    <div className="project-contact-area">
                      <div className="contact-title">
                        <h2>Have project in mind? Let's discuss</h2>
                        <p>
                          Get in touch with us to see how we can help you with
                          your project
                        </p>
                      </div>
                      <div className="contact-form-area">
                        <Contact />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
      <CursorMaus />
    </Fragment>
  );
};
export default ProjectSinglePage;
