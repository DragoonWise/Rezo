import React, { useReducer, useEffect, useContext } from 'react';
// import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import InterventionContext from './interventionContext';
import interventionReducer from './interventionReducer';
import { INTERVENTION_SUCCESS, INTERVENTION_FAIL } from '../types';
import AuthContext from '../auth/authContext';
const InterventionState = props => {
    const authContext = useContext(AuthContext);
    const { user, loadUser } = authContext;
    // useEffect(() => {
    //     loadUser();
    //     // eslint-disable-next-line
    // }, []);

    const initialState = {
        intervention: {
            startDate : Date.now()
        }
    };
    const [state, dispatch] = useReducer(interventionReducer, initialState);
    useEffect(() => {
        //Init
        console.log('Load User')
        loadUser();
        console.log('Wait User')
        // while (user === undefined);
        console.log('Create Intervention')
        //  createIntervention();
        return () => {
            // Close

        };
        // eslint-disable-next-line
    }, [loaduser]);

    // Create Intervention
    const createIntervention = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        console.log(user);
        const formData = {
            User_Id: user.id
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