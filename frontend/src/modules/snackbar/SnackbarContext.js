import * as React from 'react';

const SnackbarContext = React.createContext({
  // eslint-disable-next-line
  showSnackbar: (args) => {},
});

export default SnackbarContext;
