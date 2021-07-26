import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Book from "./components/Book/Book";
import Terms from "./components/Terms";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/terms" component={Terms} />
        </Switch>
    );
};

export default Router;
