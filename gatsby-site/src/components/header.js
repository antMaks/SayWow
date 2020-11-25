import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="uk-offcanvas-content">
  <div
    className="de-page-container ds-single-page de-content-fullwidth"
    id="page"
  >
    <div className="page-wrapper">
      <div id="backgrounds">
        <div
          id="de-site-header"
          className="de-site-header ds-single-page ds-site-header"
        >
          <header
            id="masthead"
            data-uk-scrollspy="cls:uk-animation-fade;delay:10;"
            style={{}}
            className="uk-scrollspy-inview"
          >
            <div
              id="de-header-horizontal"
              className="site-header no-vertical transparent-light"
              data-transparency="transparent-light"
            >
              <div
                id="de-header-horizontal-desktop"
                className="uk-visible@m ds-header--wrapper de-header__wrapper de-header default uk-position-z-index"
                style={{ width: 1500 }}
              >
                <div
                  className="de-header__sticky--wrapper uk-sticky"
                  data-header-sticky-box-shadow="uk-box-shadow-small"
                  data-header-sticky-offset={0}
                >
                  <div
                    id="header-sectionbefore-section"
                    className="de-header__section uk-flex uk-flex-middle"
                  >
                    <div className="uk-width-1-1">
                      <div className="uk-container"></div>
                    </div>
                  </div>
                  <div
                    id="header-section2"
                    className="de-header__section uk-flex uk-flex-middle de-header__section--show-on-sticky"
                  >
                    <div className="uk-width-1-1">
                      <div className="uk-container uk-container-expand">
                        <div
                          id="header-section-2-row-0"
                          className="de-header__row uk-grid uk-grid-small"
                          style={{ marginLeft: "-40px" }}
                        >
                          <div
                            id="header-section-2-row-0-column-0"
                            className="uk-width-1-6 uk-flex-left de-header__column uk-flex uk-flex-wrap uk-flex-row uk-flex-middle"
                          >
                            <div
                              className="uk-grid uk-grid-medium uk-child-width-auto uk-flex-left uk-grid-stack"
                              data-uk-grid
                            >
                              <div
                                data-section={2}
                                data-builder-type="header"
                                data-item-id="logo"
                                data-item-is-lazyload
                                className="de-header__item uk-flex uk-flex-middle hover-2 normal uk-first-column"
                              >
                                <div className="site-branding de-header__site-branding">
                                  <div
                                    className="de-header__site-branding-wrapper"
                                    style={{ width: 300 }}
                                  >
                                    <div className="de-header__logo-media de-header__logo-media--normal">
                                      <a href="index.html" rel="home">
                                        <img
                                          src="gallery/black.png"
                                          data-src-2x="gallery/black.png"
                                          data-src-3x="gallery/black.png"
                                          alt="Site Logo"
                                        />
                                      </a>
                                    </div>
                                    <div
                                      className="de-header__logo-media de-header__logo-media--light"
                                      style={{ width: 400 }}
                                    >
                                      <a href="index.html" rel="home">
                                        <img
                                          src="gallery/black.png"
                                          data-src-2x="gallery/black.png"
                                          data-src-3x="gallery/black.png"
                                          alt="Site Logo"
                                          style={{
                                            width: 1000,
                                            marginTop: "-30px"
                                          }}
                                        />
                                      </a>
                                    </div>
                                    <div className="de-header__logo-media de-header__logo-media--dark">
                                      <a href="index.html" rel="home">
                                        <img
                                          src="gallery/black.png"
                                          data-src-2x="gallery/black.png"
                                          data-src-3x="gallery/black.png"
                                          alt="Site Logo"
                                        />
                                      </a>
                                    </div>
                                    <div className="de-header__logo-media de-header__logo-media--sticky">
                                      <a href="index.html" rel="home">
                                        <img
                                          src="gallery/black.png"
                                          data-src-2x="gallery/black.png"
                                          data-src-3x="gallery/black.png"
                                          alt="Site Logo"
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            id="header-section-3-row-1-column-3"
                            className="uk-width-2-3 uk-flex-right de-header__column uk-flex uk-flex-wrap uk-flex-row uk-flex-middle"
                            style={{ marginLeft: 200, marginTop: "-50px" }}
                          >
                            <div
                              className="uk-grid uk-grid-medium uk-child-width-auto uk-flex-center uk-grid-stack"
                              data-uk-grid
                            >
                              <div
                                data-section={2}
                                data-builder-type="header"
                                data-item-id="mega_menu"
                                data-item-is-lazyload
                                className="de-header__item uk-flex uk-flex-middle hover-2 normal uk-first-column"
                              >
                                <div className="primary-menu">
                                  <ul
                                    className="uk-flex uk-flex-wrap uk-flex-middle uk-grid-medium de-header-navigation__primary-menu de-menu-item--underline uk-grid"
                                    data-uk-grid
                                  >
                                    <li
                                      id="nav-menu-item-2357"
                                      className="menu-item-depth-0 main-menu-item menu-item-even uk-flex uk-flex-middle menu-item menu-item-type-post_type menu-item-object-page uk-first-column"
                                    >
                                      <a
                                        href="services.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>Services</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-1268"
                                      className="menu-item-depth-0 main-menu-item  menu-item-even uk-flex uk-flex-middle de-mega-menu    menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                    >
                                      <a
                                        href="gallery.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>Gallery</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-1268"
                                      className="menu-item-depth-0 main-menu-item  menu-item-even uk-flex uk-flex-middle de-mega-menu    menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                    >
                                      <a
                                        href="faq.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>FAQ</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-2112"
                                      className="menu-item-depth-0 main-menu-item  menu-item-even uk-flex uk-flex-middle de-mega-menu    menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                    >
                                      <a
                                        href="about-us.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>About Us</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-2351"
                                      className="menu-item-depth-0 main-menu-item  menu-item-even uk-flex uk-flex-middle     menu-item menu-item-type-post_type menu-item-object-page"
                                    >
                                      <a
                                        href="https://www.fresha.com/art-pm-y9mzurzm/booking?menu=true"
                                        className="menu-link main-menu-link"
                                        target="_blank"
                                      >
                                        <span>Book Now</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-1753"
                                      className="menu-item-depth-0 main-menu-item menu-item-even uk-flex uk-flex-middle menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children"
                                    >
                                      <a
                                        href="blog.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>Blog</span>
                                      </a>
                                    </li>
                                    <li
                                      id="nav-menu-item-2112"
                                      className="menu-item-depth-0 main-menu-item  menu-item-even uk-flex uk-flex-middle de-mega-menu    menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                    >
                                      <a
                                        href="contact.html"
                                        className="menu-link main-menu-link"
                                      >
                                        <span>Contact Us</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>{" "}
                            </div>
                          </div>
                          <div
                            id="header-section-2-row-0-column-2"
                            className="uk-width-1-6 uk-flex-right de-header__column uk-flex uk-flex-wrap uk-flex-row uk-flex-middle"
                          >
                            <div
                              className="uk-grid uk-grid-medium uk-child-width-auto uk-flex-right uk-grid-stack"
                              data-uk-grid
                            ></div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  {/* <div id="header-sectionafter-section" class="de-header__section uk-flex uk-flex-middle de-header__section--show-on-sticky">
	<div class="uk-width-1-1">
		<div class="uk-container">
					</div>
	</div>
</div> */}
                </div>
                <div
                  className="uk-sticky-placeholder"
                  style={{ height: 209, margin: 0 }}
                  hidden
                />
              </div>
              <div
                id="de-header-horizontal-mobile"
                className="uk-hidden@m ds-header-mobile--wrapper de-header-mobile__wrapper de-header-mobile default"
              >
                <div
                  className="de-header__sticky--wrapper uk-sticky"
                  data-header-sticky-box-shadow="uk-box-shadow-small"
                >
                  <div
                    id="header-mobile-sectionbefore-section"
                    className="de-header-mobile__section uk-flex uk-flex-middle"
                  >
                    <div className="uk-width-1-1">
                      <div className="uk-container"></div>
                    </div>
                  </div>
                  <div
                    id="header-mobile-section2"
                    className="de-header-mobile__section uk-flex uk-flex-middle de-header-mobile__section--show-on-sticky"
                  >
                    <div className="uk-width-1-1">
                      <div className="uk-container">
                        <div
                          id="header-mobile-section-2-row-0"
                          className="de-header-mobile__row uk-grid uk-grid-small"
                          data-uk-grid
                        >
                          <div
                            id="header-mobile-section-2-row-0-column-0"
                            className="uk-width-1-2 uk-flex-left uk-flex uk-flex-wrap uk-flex-row uk-flex-middle"
                          >
                            <div
                              data-section={2}
                              data-builder-type="headermobile"
                              data-item-id="logo"
                              data-item-is-lazyload
                              className="de-header-mobile__item hover-2 normal"
                            >
                              <div className="site-branding de-header__site-branding">
                                <div
                                  className="de-header__site-branding-wrapper"
                                  style={{}}
                                >
                                  <div className="de-header__logo-media de-header__logo-media--normal">
                                    <a href="index.html" rel="home">
                                      <img
                                        src="gallery/black1.png"
                                        data-src-2x="gallery/black1.png"
                                        data-src-3x="gallery/black1.png"
                                        alt="Site Logo"
                                        style={{ height: 87, width: 240 }}
                                      />
                                    </a>
                                  </div>
                                  <div className="de-header__logo-media de-header__logo-media--light">
                                    <a href="index.html" rel="home">
                                      <img
                                        src="gallery/black1.png"
                                        data-src-2x="gallery/black1.png"
                                        data-src-3x="gallery/black1.png"
                                        alt="Site Logo"
                                        style={{ height: 70 }}
                                      />
                                    </a>
                                  </div>
                                  <div className="de-header__logo-media de-header__logo-media--dark">
                                    <a href="index.html" rel="home">
                                      <img
                                        src="gallery/black1.png"
                                        data-src-2x="gallery/black1.png"
                                        data-src-3x="gallery/black1.png"
                                        alt="Site Logo"
                                        style={{ height: 70 }}
                                      />
                                    </a>
                                  </div>
                                  <div className="de-header__logo-media de-header__logo-media--sticky">
                                    <a href="index.html" rel="home">
                                      <img
                                        src="gallery/black1.png"
                                        data-src-2x="gallery/black1.png"
                                        data-src-3x="gallery/black1.png"
                                        alt="Site Logo"
                                        style={{ height: 70 }}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            id="header-mobile-section-2-row-0-column-1"
                            className="uk-width-1-2 uk-flex-right uk-flex uk-flex-wrap uk-flex-row uk-flex-middle"
                          >
                            <div
                              data-section={2}
                              data-builder-type="headermobile"
                              data-item-id="mobile_header_element"
                              data-item-is-lazyload
                              className="de-header-mobile__item hover-2"
                              style={{ marginTop: "-20px" }}
                            >
                              <a
                                aria-label="Mobile Menu Button Open"
                                href="#"
                                className="uk-hidden@m uk-icon"
                                data-uk-icon="icon:df_mobile-menu;ratio:1;"
                                data-uk-toggle="target: #header-mobile-menu"
                              >
                                <svg
                                  xmlns="https://www.w3.org/2000/svg"
                                  width={30}
                                  height={30}
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M2,4H18V5H2ZM2,9H18v1H2Zm0,5H18v1H2Z" />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </div>
                  <div
                    id="header-mobile-sectionafter-section"
                    className="de-header-mobile__section uk-flex uk-flex-middle de-header-mobile__section--show-on-sticky"
                  >
                    <div className="uk-width-1-1">
                      <div className="uk-container"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="uk-sticky-placeholder"
                  style={{ height: 0, margin: 0 }}
                  hidden
                />
              </div>
            </div>
          </header>
        </div>
        {/* <div class="main de-content__wrapper uk-section ds-single-page ds-site-content uk-padding-remove-top" id="de-content-wrapper" data-uk-height-viewport="expand:true;" style="box-sizing: border-box;">
<div class="de-main-container" id="de-archive-content">
	<div class="uk-grid-large de-main-grid uk-grid uk-grid-stack" data-uk-grid="">
		<div class="uk-width-expand@m de-main-content uk-first-column"> */}
        <div
          className="de-content uk-child-width-1-1@s uk-grid uk-grid-stack"
          data-uk-grid
        >
          <div
            id="post-1677"
            className="post-1677 page type-page status-publish hentry uk-first-column"
          >
            <div className="de-page-builder">
              <div className="tp-bgimg" data-bgcolor="undefined" style={{}}>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t\t\t\t@media only screen and (max-width: 600px) {\n   .tp-bgimg{\n\t\n\t \n\t   \n\t\t\t\t}\n\t\t\t\t\n  \n}\n@media only screen and (min-width: 600px) {\n   .tp-bgimg{\n\t   background-repeat: no-repeat; \n\t   background-size: cover; \n\t   background-position:center; \n\t   width: 100%; \n\t   height: 760px; \n\t   background-image:url('gallery/g98-5.jpg')\n\t\t\t\t}\n  \n}\n\t\t\t\t"
                  }}
                />
                <div
                  className="justify"
                  style={{
                    textAlign: "center!important",
                    display: "flex",
                    width: 300,
                    height: 300
                  }}
                >
                  <div id="cont">ART OF PERMANENT MAKEUP</div>
                  <br />
                  <br />
                  <button className="button button2">
                    <a
                      href="services.html"
                      style={{
                        color: "white",
                        font: "inherit",
                        height: "100%",
                        width: "auto",
                        margin: "0 auto"
                      }}
                    >
                      Learn More
                    </a>
                  </button>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t@media only screen and (max-width: 600px) {\n\t\t.button {\n  display: inline-block; \n\n}\n.button2 {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  padding:12px;\n  color: black; \n  transition: .7s; /* smooth out the state change on pseudo-state :hover */\n  margin: 0 auto;\n  font:inherit;\n  cursor: pointer;\n  background-color: var(--button-default-background-color);\ncolor: var(--button-default-color);\n display: flex;\n\t\tposition: absolute;\n\t\ttop: 70%;\n\t\tleft: 50%;\n\t\twidth:36%;\n\t\ttransform: translate(-50%, -50%);\n\t\t\n}\n.button2:hover {\n\tbackground-color: #b38975;\n\tborder-color:#b38975;\n}\n\n.button2.with-margin {\n  margin: auto 10px; /* for additional spacing between inline elements*/\n}\n\n.button2:hover{\n  border: 3px solid #000;\n}\n\t\t#cont{\n\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t\tjustify-content: center;\n\t\t\t\ttext-align:center;\n\t\t\t\talign-items: center;\n\t\t\t\tcolor:black; \n\t\t\t\tfont-size:42px; \n\t\t\t\tfont-weight:bold;  \n\t\t\t\tposition: absolute;\n\t\t\t\tfont-family: -apple-system-body;\n\tfont-style: initial;\n\tcolor: rgba(0, 0, 0, 0.7);\n\t\t\t\t\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\t\t}\n\t}\n\n\t\t@media only screen and (min-width: 600px) {\n\n\t\t.button {\n  display: inline-block; \n  opacity:70%;\n}\n\n.button2 {\n  background-color: Transparent;\n  background-repeat:no-repeat;\n  padding:12px;\n  color: black; \n  border: 3px solid black;\n  transition: .7s; \n    margin: 0 auto;\n  font:inherit;\n  cursor: pointer;\n  background-color: var(--button-default-background-color);\n    color: var(--button-default-color);\n    border-color: var(--button-default-border-color);\n\tdisplay: flex;\n\t\tposition: absolute;\n\t\ttop: 70%;\n\t\tleft: 50%;\n\t\twidth:20%;\n\t\ttransform: translate(-50%, -50%);\n\t\n}\n.button2:hover {\n\tbackground-color: #b38975;\n\tborder-color:#b38975;\n}\n\n.button2.with-margin {\n  margin: auto 10px; /* for additional spacing between inline elements*/\n}\n\n.button2:hover{\n  border: 3px solid #000;\n}\n\t\t#cont{\n\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 100%;\n\t\t\t\tjustify-content: center;\n\t\t\t\ttext-align:center;\n\t\t\t\talign-items: center;color:black; font-size:42px; font-weight:bold;  position: absolute;font-weight:bold;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: -apple-system-body;\n    font-style: initial;\n\t\t}\n\t\t}\n"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
