import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { SnackbarProvider } from './modules/snackbar';
import OwnerProductList from './modules/home/UserHome';
import AppRouter from './modules/router/AppRouter';

const theme = createMuiTheme({
  palette: {
    primary: {
      // main: '#cc9e4c'
      main: '#1a3622'
    },
    secondary: {
      main: '#bebbb8',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans serif'].join(',')
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider>
          <AppRouter />
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
