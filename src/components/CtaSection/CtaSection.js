import React, { useState } from "react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitConsultacy = () => {
    const mailtoLink = `mailto:traitid@gmail.com?subject=Konsultasi&body=Hai%20Saya%20${formData.name}%20dari%20${formData.company}%20ingin%20konsultasi%20tentang`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="cta-section mb-4">
      <div className="container">
        <div className="cta-wrap">
          <div className="content">
            <h2>Get A Free Consultation</h2>
            <p>Drop us a line! We are here to answer your questions 24/7</p>
          </div>
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="input-filled">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="input-filled">
              <input
                type="text"
                placeholder="Your Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-filled">
              <input
                type="text"
                placeholder="Your Company*"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div className="input-filled">
              <button type="submit" onClick={submitConsultacy}>
                Free Consultancy
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
