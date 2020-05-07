import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';

const TakeCall = () => {
    const authContext = useContext(AuthContext);

    const { user } = authContext;

    const takeCallFunction = (e) => {

    }
    const tmp = 'col-12 '+((user && user.IsAdmin) ? 'col-md-9 ':'')+'text-center bg-light row';
    return (
        <div className={tmp} >
            <div className='col-12 mb-2'>
                <span>Nombre d'appel en attente : 1</span>
            </div>

            <div className='col-12 my-2'>
                <button className='btn btn-primary' onClick={takeCallFunction}>Prendre l'appel</button>
            </div>
        </div>
    );
};

export default TakeCall;