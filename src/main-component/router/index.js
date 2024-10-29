import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import ServicePage from "../ServicePage/ServicePage";
import ServiceSinglePage from "../ServiceSinglePage/ServiceSinglePage";
import ProjectPage from "../ProjectPage/ProjectPage";
import ProjectSinglePage from "../ProjectSinglePage/ProjectSinglePage";
import TestimonialsPage from "../testimonialsPage/testimonialsPage";
import ContactPage from "../ContactPage/ContactPage";
import LoginPage from "../LoginPage/index";
import ForgotPassword from "../ForgotPassword/index";
import Register from "../SignUpPage/index";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivacePage from "../PrivacePage/PrivacePage";
import TermsPage from "../TermsPage/TermsPage";

const AllRoute = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="privace" element={<PrivacePage />} />
          <Route path="terms" element={<TermsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllRoute;
