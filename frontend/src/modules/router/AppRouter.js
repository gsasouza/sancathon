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
import Tendencies from '../user/Tendencies';
import ProductBasket from '../product/ProductBasket';
import OwnerList from '../user/OwnerList';

import { createQueryRenderer } from '../../relay/createQueryRender';

import NotFound from '../common/NotFound';

const chooseScreen = (UserComponent, OwnerComponent, me, props) => {
  if (!isLoggedIn()) return <Login {...props}/>;
  if (!me) return <Login {...props}/>;
  if (me.isOwner) return <OwnerComponent {...props} />;
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
        render={(props) => chooseScreen(UserHome, OwnerHome, me, props) }
      />
      <Route
        path={'/product/list'}
        exact={true}
        render={(props) => chooseScreen(UserProductList, OwnerProductList, me, props)}
      />
      <Route
        path={'/product/new'}
        exact={true}
        render={(props) => chooseScreen(NotFound, OwnerCreateProduct, me, props)}
      />
      <Route
        path={'/product/basket'}
        exact={true}
        render={(props) => chooseScreen(ProductBasket, NotFound, me, props)}
      />
      <Route
        path={'/families'}
        exact={true}
        render={(props) => chooseScreen(OwnerList, NotFound, me, props)}
      />
      <Route
        path={'/product/tendencies'}
        exact={true}
        render={(props) => chooseScreen(NotFound, Tendencies, me, props)}
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
