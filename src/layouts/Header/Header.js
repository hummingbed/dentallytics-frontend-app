import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";
import dentallyticsLogo from '../../assets/icons/dentallytics-logo.svg';

const Header = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary border border-3">
        <div className="container-fluid">
          <div>
            <button className="btn text-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
              <i className="bi bi-border-width">&nbsp; &nbsp; </i>
            </button>

            <Link to="/">
              <img src={dentallyticsLogo} alt="dentallyticsLogo" />
            </Link>

          </div>
          <div>
          <Link to="/" className="fs-4 text-dark">
              <i className="bi bi-person-circle"></i>
          </Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas side navigation */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
