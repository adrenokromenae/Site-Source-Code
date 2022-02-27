import React, { Component } from "react";

import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import ModalMenu from "../components/Modal/ModalMenu";

class ThemeOne extends Component {
  render() {
    return (
      <div className='main'>
        <Body />
        <ModalMenu />
      </div>
    );
  }
}

export default ThemeOne;
