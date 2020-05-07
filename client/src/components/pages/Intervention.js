import React from 'react';
import MenuAdmin from '../layout/Admin/MenuAdmin';
import TimerCall from '../layout/TimerCall';
import InterventionState from '../../context/intervention/interventionState';


const Intervention = () => {

    return (
        <InterventionState>
            <div className='row'>
                <MenuAdmin />
                <div className='row col-12 col-md'>
                    <TimerCall />
                </div>
            </div>
        </InterventionState>
    );
};

export default Intervention;