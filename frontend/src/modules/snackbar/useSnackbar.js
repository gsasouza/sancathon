import { useContext } from 'react';

import SnackbarContext from './SnackbarContext';

const useSnackbar = () => {
  const snackBarContext = useContext(SnackbarContext);

  return {
    showSnackbar: snackBarContext.showSnackbar,
  };
};

export default useSnackbar;
