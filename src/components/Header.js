import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/netstorm-json-2/footer";

class Footer extends Component {
  state = {
    data: {},
    socialData: [],
    widgetData_1: [],
    widgetData_2: [],
  };
  componentDidMount() {
    axios
      .get(`${BASE_URL}`)
      .then((res) => {
        this.setState({
          data: res.data,
          socialData: res.data.socialData,
          widgetData_1: res.data.widgetData_1,
          widgetData_2: res.data.widgetData_2,
        });
        //  console.log(this.state.data)
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <footer className="footer-area container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="">
            <div className="row">
              <div className="col-md-12 res-margin">
                {/* Footer Items */}
                <div className="footer-items">
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    <a
                      className="navbar-brand"
                      href="/"
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="./img/logo (4).png"
                        style={{
                          display: "block",
                          margin: "auto",
                        }}
                      />
                    </a>
                  </div>

                  <div
                    className="social-icons d-flex"
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <a
                      class="twitter"
                      href="https://www.twitter.com/handbagofgods"
                    >
                      <img src="./img/Vector (1).png"></img>
                    </a>

                    <a
                      class="pinterest"
                      href="https://www.instagram.com/handbagofthegods/"
                    >
                      <img src="./img/Vector (2).png"></img>
                    </a>
                    <a
                      class="pinterest"
                      href="https://discord.com/invite/thehandbagofthegods"
                    >
                      <img src="./img/Vector (4).png"></img>
                    </a>
                    <a
                      class="pinterest"
                      href="https://www.facebook.com/handbagofgods"
                    >
                      <img src="./img/Meta-facebook-New-Logo 1.png"></img>
                    </a>
                    <a
                      class="pinterest"
                      href="https://linktr.ee/thehandbagofthegods"
                    >
                      <img src="./img/linktree 1.png"></img>
                    </a>
                    <a class="pinterest" href="mailto:contact@phennix.org">
                      <img src="./img/Vector (5).png"></img>
                    </a>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="">
            <div className="row">
              <div className="col-12" style={{ textAlign: "center" }}>
                {/* Copyright Area */}
                <a href="#">Terms & Conditions</a>
                <p>
                  © 2021 All Rights Reserved. The HandBag of the Gods brand
                  <br /> &<br /> Logo is registered trademark of
                  <a className="companyName" href="https://www.phennix.org/">
                    Phennix Financial LTD.
                  </a>
                  <a className="companyName" href="https://www.phennix.org/">
                    www.phennix.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
