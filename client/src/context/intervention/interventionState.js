import React, { useReducer, useEffect, useContext } from 'react';
// import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import InterventionContext from './interventionContext';
import interventionReducer from './interventionReducer';
import { INTERVENTION_SUCCESS, INTERVENTION_FAIL } from '../types';
import AuthContext from '../auth/authContext';
const InterventionState = props => {
    const initialState = {
        intervention: null
    };
    const [state, dispatch] = useReducer(interventionReducer, initialState);
    useEffect(() => {
        //Init
        createIntervention();
        return () => {
            // Close

        };
    }, []);

    const authContext = useContext(AuthContext);
    const { user, loadUser } = authContext;
    useEffect(() => {
        loadUser();
        // eslint-disable-next-line
      }, []);
      

    // Create Intervention
    const createIntervention = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const formData = {
            User_Id: user.Id
        };

        try {
            const res = await axios.post('/api/intervention', formData, config);

            dispatch({
                type: INTERVENTION_SUCCESS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: INTERVENTION_FAIL,
                payload: err.response.data.msg
            });
        }
    };

    // // Set Intervention
    // const setIntervention = () => {
    //     // Get Intervention via api
    //     // data = ...
    //     dispatch({
    //         type: SET_INTERVENTION,
    //         payload: { data },
    //     });
    // };
    return (
        <InterventionContext.Provider
            value={{
                intervention: state.intervention,
            }}>
            {props.children}
        </InterventionContext.Provider>
    );
};

export default InterventionState;