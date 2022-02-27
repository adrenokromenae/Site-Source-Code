import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import Header from "../components/Header";
import Mint from "../components/Mint";
import Body from "../components/Body";
import Card from "../components/Card";
import ModalMenu from "../components/Modal/ModalMenu";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Footer />
        <Router>
          <Switch>
            <Route exact path='/' component={ThemeOne} />
            <Route exact path='/Header' component={Header} />
            <Route exact path='/Body' component={Body} />
            <Route exact path='/Footer' component={Footer} />
            <Route exact path='/mint' component={Mint} />
            <Route exact path='/card' component={Card} />
          </Switch>
        </Router>
        <Header />
        <ModalMenu />
      </div>
    );
  }
}
export default MyRouts;
