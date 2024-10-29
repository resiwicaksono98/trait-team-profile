import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
// import VideosSection from '../../components/VideosSection/VideosSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-2.svg'
import Phone from '../../images/telephone.svg'
import CursorMaus from '../../components/CursorMaus/CursorMaus';
const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={"wpo-site-header s3"} telephone={Phone} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About />
            {/* <VideosSection /> */}
            <TestimonialSection />
            <CtaSection />
            <Footer />
            <Scrollbar />
            <CursorMaus />
        </Fragment>
    )
};
export default AboutPage;
