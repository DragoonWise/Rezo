import React, { Fragment, useContext, useEffect } from 'react';
import InterventionContext from '../../context/intervention/interventionContext';
const TimerCall = () => {
    const interventionContext = useContext(InterventionContext);
    const { intervention } = interventionContext;

    const timecall = () => {
return 0;
    }

    return (
        <div className='row text-center col-6'>
            <span className='d-none d-sm-inline-block'>Durée de l'appel :</span>
            {/* {timecall} */}
        </div>
    );
};

export default TimerCall;