import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sakutambah from "../../images/testimonial/sakutambah.jpeg";
import formuloor from "../../images/testimonial/formuloor.webp";

import Shape1 from "../../images/testimonial/star.svg";
import Shape2 from "../../images/testimonial/star-1.svg";
import Shape3 from "../../images/testimonial/quote.png";

const TestimonialData = [
  {
    id: "01",
    text: "Saya sangat puas dengan layanan yang diberikan. Tim support sangat responsif dan profesional dalam menangani setiap pertanyaan. Produk yang ditawarkan berkualitas tinggi dan sesuai dengan kebutuhan bisnis kami. Sangat merekomendasikan layanan ini kepada siapa saja yang mencari solusi terpercaya.",
    subtitle: "CEO Of Sakutambah",
    title: "Jamal Karim",
    rating: 4.8,
    image: sakutambah
  },
  {
    id: "02",
    text: "Formuloor telah membantu kami dalam mengembangkan sistem perhitungan formula parfum. Layanan yang diberikan sangat profesional dan tepat waktu. Tim mereka sangat kompeten dan selalu siap membantu ketika dibutuhkan. Kami sangat puas dengan hasil kerja sama ini.",
    subtitle: "Senior Developer At Formuloor",
    title: "Hendry Gunawan",
    rating: 4.5,
    image: formuloor
  },
  {
    id: "03",
    text: "Saya sangat senang dengan pelayanan yang diberikan. Tim pengembang sangat profesional dan memahami kebutuhan proyek dengan baik. Hasil kerja mereka memuaskan dan sesuai dengan ekspektasi. Komunikasi lancar dan selalu responsif dalam menangani setiap permintaan perubahan.",
    subtitle: "Fullstack Developer At Astina",
    title: "Melvin andreas",
    image: null,
    rating: 4.9
  }
];

const TestimonialSection = () => {
//   const ClickHandlar = () => {
//     window.scrollTo(10, 0);
//   };

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  };
  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <div className="row align-content-center">
          <div className="col-xl-4 col-12">
            <div className="section-title">
              <span>Testimonial</span>
              <h2>Our Latest Case Studies</h2>
              <p>
                We provide high-quality services and solutions that exceed our
                clients' expectations. Our team of experts is dedicated to
                delivering exceptional results.
              </p>
            </div>
          </div>
          <div className="col-xl-8 col-12">
            <div className="testimonial-slider">
              <Slider {...settings}>
                {TestimonialData.map((Testimonials, tky) => (
                  <div className="item" key={tky}>
                    <div className="client">
                      <div className="image">
                        <img src={Testimonials.image} alt="" />
                      </div>
                      <div className="text">
                        <h2>{Testimonials.title}</h2>
                        <span>{Testimonials.subtitle}</span>
                      </div>
                    </div>
                    <div className="reting">
                      <ul>
                        <li>
                          <img src={Shape1} alt="" />
                        </li>
                        <li>
                          <img src={Shape1} alt="" />
                        </li>
                        <li>
                          <img src={Shape1} alt="" />
                        </li>
                        <li>
                          <img src={Shape1} alt="" />
                        </li>
                        <li>
                          <img src={Shape2} alt="" />
                        </li>
                      </ul>
                      <span>({Testimonials.rating})</span>
                    </div>
                    <p>{Testimonials.text}</p>
                    <div className="icon">
                      <img src={Shape3} alt="" />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
