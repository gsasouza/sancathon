import * as React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StoreIcon from '@material-ui/icons/Store';

const items = [
  {
    label: 'Meus Produtos',
    route: '/',
    icon: <StoreIcon />
  },
];


const Item = ({ label, icon, route }) => (
  <ListItem button key={label} onClick={() => console.log(route)}>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={label} />
  </ListItem>
);

const Sidebar = ({ isOpen, setIsOpen }) => {

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
          {items.map((item, index) => <Item key={index} {...item} />)}
        </List>
      </div>
    </SwipeableDrawer>
  )
};

export default Sidebar;
