import React from "react";
import Background from "./containers/Background";
import Points from './containers/Points';
import HistoryBackground from './containers/HistoryBackground';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme } from "./styles/theme";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Switch>
        <Route exact path="/products">
            <Background />
          </Route>
          <Route path="/points">
            <Points />
          </Route>
          <Route path="/history">
            <HistoryBackground />
          </Route>
          <Redirect from="/*" to="/products" />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
