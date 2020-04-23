import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import MenuAdmin from '../layout/Admin/MenuAdmin';
import DashBoardAdmin from '../layout/Admin/DashBoardAdmin';
import TakeCall from '../layout/TakeCall';


const Home = () => {
    const authContext = useContext(AuthContext);

    const { user, loadUser, loading } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    while(loading);
    return (
        <div className='row'>
            <MenuAdmin />
            {user && !user.IsAdmin ?
                <Fragment>
                    <img src='/images/DashboardCall.jpg' alt='Dashboard'/>
                    <TakeCall />
                </Fragment>
                :
                <DashBoardAdmin />
            }
        </div>
    );
};

export default Home;