import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/authContext';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const MenuAdmin = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, user, loadUser } = authContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        isAuthenticated && user.IsAdmin ?
            <div className='col-12 col-md-3'>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto flex-column">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">DashBoard <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/AdminTakeCall">Prendre un Appel</a>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
            : null

    );
};

export default MenuAdmin;