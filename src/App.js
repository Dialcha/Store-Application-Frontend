import React from "react";
import Background from "./containers/Background";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Background />
    </ThemeProvider>
  );
}

export default App;
