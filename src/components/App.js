import React from "react";
import { Router } from "@reach/router";
import Header from "./elements/Header.js";
import Home from "./Home.js";
import NotFound from "./NotFound.js";
import Movie from "./Movie.js";
import { GlobalStyle } from "./styles/GlobalStyle.js";

///JSX is syntatical sugar for React.createElement
// JSX is self- close
// User defined components should start with captial letter
//You can use javascript expressions inside of JSX, just use {}
//You can nest components just like html
//Nested content can be accessed in props.children
const App = function () {

  return (
    <>
      <Header />
      <Router>
        <Home path="/" />
        {/* Movie component shows when we go to the path that has the param movieID */}
        <Movie path="/:movieID" />
        <NotFound default />
      </Router>

      <GlobalStyle />
    </>
  );
};

export default App;
