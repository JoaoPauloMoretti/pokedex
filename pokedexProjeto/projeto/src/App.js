import React from "react";
import Router from "./routes/Router";
import { createGlobalStyle } from 'styled-components';
import GlobalState from "./global/GlobalState";

const App = () => {

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
`

  return (
    <GlobalState>
      <GlobalStyle/>
      <Router/>
    </GlobalState>
  );
}

export default App;
