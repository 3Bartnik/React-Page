import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";
import Error from "./Error";
import Footer from "./Footer";
import Studio from "./Studio";
import Price from "./Price";
import Artistic from "./Artistic";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <section style={{ margin: "0 0 50px 0" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/studio" component={Studio} />
            <Route path="/price" component={Price} />
            <Route path="/artistic" component={Artistic} />
            <Route component={Error} />
          </Switch>
        </section>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
