import React, { Fragment, useContext, useEffect } from 'react';
// import AuthContext from '../../context/auth/authContext';
import MenuAdmin from '../layout/Admin/MenuAdmin';
import TimerCall from '../layout/TimerCall';
import InterventionState from '../../context/intervention/interventionState';


const Intervention = () => {
    // const authContext = useContext(AuthContext);

    // const { isAuthenticated, user, loadUser } = authContext;

    // useEffect(() => {
    //     loadUser();
    //     // eslint-disable-next-line
    // }, []);

    return (
        <InterventionState>
            <div className='row'>
                <MenuAdmin />
                <div>
                    <TimerCall />
                </div>
            </div>
        </InterventionState>
    );
};

export default Intervention;