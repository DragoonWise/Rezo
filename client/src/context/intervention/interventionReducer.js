import { INTERVENTION_SUCCESS, INTERVENTION_FAIL} from '../types';

export default (state, action) => {
  switch (action.type) {
    case INTERVENTION_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
      };
    case INTERVENTION_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        intervention: null,
        error: action.payload
      };
    // case SET_INTERVENTION:
    //   return [...state, action.payload];
    default:
      return state;
  }
};