import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isLoggedIn } from '../security/security';
import Login from '../user/Login';
import SignUp from '../user/Signup';
import UserDashboard from '../home/UserHome';
import OwnerProductList from '../product/OwnerProductList';
import OwnerCreateProduct from '../product/OwnerCreateProduct';
import UserProductList from '../product/UserProductList';
import Tendencies from '../product/Tendencies';

const AppRouter = () => (
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
        render={(props) => isLoggedIn() ? <UserDashboard {...props} />: <Login {...props}/>  }
      />

    </Switch>
  </BrowserRouter>
);

export default AppRouter;
