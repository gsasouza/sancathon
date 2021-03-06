import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import _Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';

import label from '../assets/logotipo.png';
import useSnackbar from './snackbar/useSnackbar';
import Sidebar from './Sidebar';

const Toolbar = styled(_Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  height: 100vh;
`;

const Title = styled(Typography)`
  && {
    font-family: "Sunrise International", sans-serif;
  }
`;

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { showSnackbar } = useSnackbar();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
          <img src={label} style={{ height: 35 }} />
          <IconButton color="inherit" aria-label="Perfil" onClick={() => showSnackbar({ message: 'E AI GALERA', type: 'info'})}>
            <AccountIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Content>
        {children}
      </Content>
    </>
  )
};

export default Layout;


