import { React, useEffect } from "react";
import Body from "../Body";

function hideNav() {
  document.getElementById("menu").style.display = "none";
}

const ModalMenu = () => {
  const hideNavBar = () => {
    hideNav();
    $(".modal-backdrop").remove();
  };

  return (
    <div id='menu' className='modal fade p-0'>
      <div className='modal-dialog dialog-animated'>
        <div className='modal-content h-100'>
          <div className='modal-header' data-dismiss='modal'>
            Menu <i className='far fa-times-circle icon-close' />
          </div>

          <div className='menu modal-body'>
            <div className='row w-100'>
              <ul className='navbar-nav items '>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    onClick={hideNavBar}
                    href='#aboutSection'>
                    About
                  </a>
                </li>

                <li className='nav-item'>
                  <a
                    className='nav-link'
                    onClick={hideNavBar}
                    href='/#theRoadMap'>
                    Roadmap
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={hideNavBar} href='#faq'>
                    FAQ
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' onClick={hideNavBar} href='#team'>
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
                <li className='nav-item mint'>
                  <a
                    className='nav-link joinD'
                    href='https://discord.com/invite/thehandbagofthegods'>
                    Join Discord
                  </a>
                </li>

                <div className='social-icons d-flex'>
                  <a
                    class='twitter'
                    href='https://www.twitter.com/handbagofgods'>
                    <img src='./img/Vector (1).png'></img>
                  </a>

                  {/* <a class="telegram" href="#">
                                            <i class="fab fa-telegram"></i>
                                            <i class="fab fa-telegram"></i>
                                        </a> */}
                  {/* <a class="discord" href="https://discord.com/">
                                        <img src="/img/Logomark-Transparent White.png"/>
                                        <i class="fab fa-discord"></i>
                                    </a> */}
                  <a
                    class='pinterest'
                    href='https://www.instagram.com/handbagofgods'>
                    <img src='./img/Vector (2).png'></img>
                  </a>
                  <a
                    class='pinterest'
                    href='https://www.facebook.com/profile.php?id=100075154933764'>
                    <img src='./img/Meta-facebook-New-Logo 1.png'></img>
                  </a>
                </div>

                {/* <li className="nav-item"><a href="./explore-3" className="nav-link">Gallery</a></li> */}
                {/* <li className="nav-item"><a href="./marketplace" className="nav-link">Marketplace</a></li> */}
                {/* <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Explore <i className="fas fa-angle-down ml-1" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="/explore-1" className="nav-link">Explore Style 1</a></li>
                                    <li className="nav-item"><a href="/explore-2" className="nav-link">Explore Style 2</a></li>
                                    <li className="nav-item"><a href="/explore-3" className="nav-link">Explore Style 3</a></li>
                                    <li className="nav-item"><a href="/explore-4" className="nav-link">Explore Style 4</a></li>
                                    <li className="nav-item"><a href="/auctions" className="nav-link">Live Auctions</a></li>
                                    <li className="nav-item"><a href="/item-details" className="nav-link">Item Details</a></li>
                                </ul>
                            </li>
                          
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Community <i className="fas fa-angle-down ml-1" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
                                    <li className="nav-item"><a href="/blog-single" className="nav-link">Blog Single</a></li>
                                    <li className="nav-item"><a href="/help-center" className="nav-link">Help Center</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#">Pages <i className="fas fa-angle-down ml-1" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><a href="/authors" className="nav-link">Authors</a></li>
                                    <li className="nav-item"><a href="/author" className="nav-link">Author</a></li>
                                    <li className="nav-item"><a href="/wallet-connect" className="nav-link">Wallet Connect</a></li>
                                    <li className="nav-item"><a href="/create" className="nav-link">Create</a></li>
                                    <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
                                    <li className="nav-item"><a href="/signup" className="nav-link">Signup</a></li>
                                </ul>
                            </li> */}

                {/* <li className="nav-item">
                                <a href="./activity" className="nav-link">My Mint</a>
                            </li>
                            <li className="nav-item">
                                <a href="./profile" className="nav-link">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://tronscan.io/#/contract/TVp1v9DvD64HcjG8cmLj9PBCDLcgScLZg3/code" className="contractLink">Contract</a>
                            </li> */}
                {/* <li className="nav-item">
                                <a href="/marketPlace" className="nav-link">Marketplace</a>
                            </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMenu;
