import hoistStatics from 'hoist-non-react-statics';
import * as React from 'react';

import SnackbarContext from './SnackbarContext';

export default function withSnackbar(WrappedComponent) {
  const ConnectedSnackbar = (props) => {
    return (
      <SnackbarContext.Consumer>
        {({ showSnackbar }) => <WrappedComponent {...props} showSnackbar={showSnackbar} />}
      </SnackbarContext.Consumer>
    );
  };

return hoistStatics(ConnectedSnackbar, WrappedComponent);
}
