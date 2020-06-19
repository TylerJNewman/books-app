import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import NavBar from './NavBar';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <div>
      <p>Hello World</p>
    </div>
  </ThemeProvider>
);
export default App;
