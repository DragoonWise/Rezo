import React from 'react'; // , { Fragment, useContext, useEffect }
// import { Link } from 'react-router-dom';
// import AuthContext from '../../../context/auth/authContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const DashBoardAdmin = () => {
    // const authContext = useContext(AuthContext);

    // const { isAuthenticated, user, loadUser } = authContext;

    // useEffect(() => {
    //     loadUser();
    //     // eslint-disable-next-line
    // }, []);


    return (
        <div className='col-12 col-md-9 bg-light'>
            <h1>DashBoard Admin</h1>

            <img src='/images/Dashboard.jpg' alt='Dashboard' />
        </div>
    );
};

export default DashBoardAdmin;