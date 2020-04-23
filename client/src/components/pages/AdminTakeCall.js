import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import MenuAdmin from '../layout/Admin/MenuAdmin';
import TakeCall from '../layout/TakeCall';
import { Redirect } from 'react-router-dom';


const Home = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, user, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    if (isAuthenticated && user.IsAdmin)
        return (
            <div className='row'>
                <MenuAdmin />
                <TakeCall />
        }
            </div>
        );
    return Redirect('/');
};

export default Home;