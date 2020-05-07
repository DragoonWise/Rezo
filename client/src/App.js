import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import AdminHome from './components/pages/Admin/Home';
import About from './components/pages/About';
import AdminTakeCall from './components/pages/Admin/TakeCall';
import AdminUsersList from './components/pages/Admin/UsersList';
import AdminUser from './components/pages/Admin/User';
// import Intervention from './components/pages/Intervention';
import LoginForm from './components/auth/LoginForm';
import Alerts from './components/layout/alerts';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
// import 'fontawesome'
import './App.css';

function App() {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container-fluid'>
              <Alerts />
              <Switch>
                <Route exact path='/login' component={LoginForm} />
                <Route exact path='/about' component={About} />
                <AdminRoute exact path='/' component={AdminHome} />
                <PrivateRoute exact path='/' component={Home} />
                <AdminRoute exact path='/Admin/TakeCall' component={AdminTakeCall} />
                <AdminRoute exact path='/Admin/UsersList' component={AdminUsersList} />
                <AdminRoute path='/Admin/User/:id' component={AdminUser} />
                {/* <PrivateRoute exact path='/intervention' component={Intervention} /> */}
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </AuthState>
  );
}

export default App;
