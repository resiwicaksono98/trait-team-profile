import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" >
            <div className={" " + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" to="/">
                                        <img src={props.Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler}  to="/">Home</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                        {/* <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="#">Services</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                                <li><Link onClick={ClickHandler} to="/service-single/1">Services Single</Link></li>
                                            </ul>
                                        </li> */}
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} to="/project">Portfolio</Link>
                                            {/* <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} to="/project">Portfolio</Link></li>
                                                <li><Link onClick={ClickHandler} to="/project-single/1">Portfolio Single</Link></li>
                                            </ul> */}
                                        </li>

                                        <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
