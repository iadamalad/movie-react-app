import React from "react";
import Header from "./elements/Header.js";
import Home from "./Home.js";
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
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
