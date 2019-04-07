import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import _Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountIcon from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Toolbar = styled(_Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  height: calc(100vh - 48px);
`;

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu" onClick={() => setIsOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Sobera
          </Typography>
          <IconButton color="inherit" aria-label="Perfil" onClick={() => console.log('Perfil')}>
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


