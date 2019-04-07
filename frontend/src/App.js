import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Layout from './modules/Layout';
import { SnackbarProvider } from './modules/snackbar';

import OwnerProductList from './modules/product/UserProductList';

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
<<<<<<< HEAD
          <Layout>
            <OwnerProductList/>
          </Layout>
=======
          <OwnerProductList/>
>>>>>>> 6f89d7d1df095100df1dad4a926dddadd2fd4259
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
