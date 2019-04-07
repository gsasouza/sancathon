import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { isLoggedIn } from '../security/security';
import Login from '../user/Login';
import SignUp from '../user/Signup';
import UserHome from '../home/UserHome';
import OwnerHome from '../home/OwnerHome';
import OwnerProductList from '../product/OwnerProductList';
import OwnerCreateProduct from '../product/OwnerCreateProduct';
import UserProductList from '../product/UserProductList';
import { createQueryRenderer } from '../../relay/createQueryRender';

const NotFound = () => (
  <div>
    NOT FOUND
  </div>
);

const chooseScreen = (UserComponent, OwnerComponent, isOwner, props) => {
  if (!isLoggedIn()) return <Login {...props}/>;
  if (isOwner) return <OwnerComponent {...props} />;
  return <UserComponent {...props} />;
};

const AppRouter = ({ query: { me }}) => (
  <BrowserRouter>
    <Switch>
      <Route
        path={'/login'}
        exact={true}
        render={props => <Login {...props}/>}
      />
      <Route
        path={'/signup'}
        exact={true}
        render={(props) => <SignUp {...props} /> }
      />
      <Route
        path={'/'}
        exact={true}
        render={(props) => chooseScreen(UserHome, OwnerHome,me.isOwner, props) }
      />
      <Route
        path={'/product/list'}
        exact={true}
        render={(props) => chooseScreen(UserProductList, OwnerProductList, me.isOwner, props)}
      />
      <Route
        path={'/product/new'}
        exact={true}
        render={(props) => chooseScreen(NotFound, OwnerCreateProduct,  me.isOwner, props)}
      />
      <Route
        path={'/product/tendencies'}
        exact={true}
        render={(props) => chooseScreen(NotFound, OwnerCreateProduct,  me.isOwner, props)}
      />
      <Route path="*" component={NotFound}/>

    </Switch>
  </BrowserRouter>
);

const fragment = createFragmentContainer(AppRouter, {
  query: graphql`
      fragment AppRouter_query on Query {
          me {
              isOwner
          }
      }
  `,
});

export default createQueryRenderer(fragment, {
  query: graphql`
      query AppRouterQuery {
          ...AppRouter_query
      }
  `,
});
