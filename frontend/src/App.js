import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Layout from './modules/Layout';
import { SnackbarProvider } from './modules/snackbar';
import Tendencies from './modules/user/Tendencies.jsx';

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
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider>
          <Layout>
            <Tendencies/>
          </Layout>
        </SnackbarProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
