import * as React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter } from 'react-router-dom';

const items = [
  {
    label: 'Início',
    route: '/',
    icon: <HomeIcon />
  },
  {
    label: 'Produtos',
    route: '/product/list',
    icon: <StoreIcon />
  },
];


const Item = ({ label, icon, route, history }) => (
  <ListItem button key={label} onClick={() => history.push(route)}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

const Sidebar = ({ isOpen, setIsOpen, history }) => {

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => setIsOpen(false)}
        onKeyDown={() => setIsOpen(false)}
      >
        <List>
          {items.map((item, index) => <Item key={index} {...item} history={history} />)}
        </List>
      </div>
    </SwipeableDrawer>
  )
};

export default withRouter(Sidebar);
