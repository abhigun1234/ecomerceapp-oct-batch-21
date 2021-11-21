import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Register from "./Register"
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./AboutUs";
import MyLogin from "./MyLogin";
import PageNotFound from "./PageNotFound";
import ContactUs from "./ContactUs";
import PageNotFoundC from "./PageNotFoundC";
import ConditionalRendering from "./ConditionalRendering";
import ShowHideData from "./ShowHideData";

export default class App extends Component {
  render() {
    return (
//       <div>
//         <ShowHideData/>
//       </div>
      <BrowserRouter>
        <NavBar />
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/about1" exact component={AboutUs}></Route>
        <Route path='/contactus' exact component={ContactUs}></Route>
        <Route path='/register' exact component={Register}/>
        <Route path='/mlogin' exact component={MyLogin}/>
        <Route path="*" component={PageNotFoundC} ></Route>
        </Switch>
    
      </BrowserRouter>
    );
  }
}
{/* <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/customers" exact component={CustomersList} />
        <Route path="/cart" exact component={ShoppingCart} /> */}
