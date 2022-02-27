import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header id='header'>
          {/* Navbar */}
          <nav
            data-aos='zoom-out'
            data-aos-delay={800}
            className='navbar navbar-expand'>
            <div
              className='container header'
              style={{
                padding: "7px 0px",
              }}>
              <div
                className='social-icons d-none smallNav'
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "0",
                }}>
                <a class='twitter' href='https://www.twitter.com/handbagofgods'>
                  <img src='./img/Vector (1).png'></img>
                </a>

                <a
                  class='pinterest'
                  href='https://www.instagram.com/handbagofgods'>
                  <img src='./img/Vector (2).png'></img>
                </a>
                <a
                  class='pinterest'
                  href='https://discord.com/invite/thehandbagofthegods'>
                  <img src='./img/Vector (4).png'></img>
                </a>
                <a
                  class='pinterest'
                  href='https://www.facebook.com/handbagofgods'>
                  <img src='./img/Meta-facebook-New-Logo 1.png'></img>
                </a>
              </div>
              {/* Navbar Brand*/}
              <a className='navbar-brand' href='/'>
                <img
                  className=''
                  src='./img/logo (4).png'
                  style={{
                    display: "block",
                    margin: "auto",
                  }}
                  alt='sticky brand-logo'
                />
              </a>
              <div className='ml-auto' />
              {/* Navbar */}
              <ul className='navbar-nav items '>
                <li className='nav-item'>
                  <a className='nav-link' href='#handbagSection'>
                    About
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#theRoadMap'>
                    Roadmap
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#faq'>
                    FAQ
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#team'>
                    Team
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/mint'>
                    Mint
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/card'>
                    Card
                  </a>
                </li>
                <div className='ml-auto d-flex'>
                  <div className='social-icons d-flex'>
                    <a
                      class='twitter'
                      target='_blank'
                      href='https://twitter.com/handbagofgods'>
                      <img src='./img/Vector (1).png'></img>
                    </a>

                    <a
                      class='pinterest'
                      href='https://www.instagram.com/handbagofthegods/'
                      target='_blank'>
                      <img src='./img/Vector (2).png'></img>
                    </a>
                    <a
                      class='pinterest'
                      href='https://www.facebook.com/handbagofgods
'
                      target='_blank'>
                      <img src='./img/Meta-facebook-New-Logo 1.png'></img>
                    </a>
                    <a
                      target='_blank'
                      class='pinterest'
                      href='https://discord.com/invite/thehandbagofthegods'>
                      <img src='./img/Vector (4).png'></img>
                    </a>
                  </div>
                </div>
              </ul>

              {/* Navbar Toggler */}
              <ul className='navbar-nav toggle'>
                <li className='nav-item'>
                  <a
                    href='#'
                    className='nav-link'
                    data-toggle='modal'
                    data-target='#menu'>
                    <i className='fas fa-bars toggle-icon m-0' />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
