// import { Map as map } from 'immutable';
import { SAVE_REQUEST } from './request.types';
import formData from '../../utils/forms/forms';

// const isServer = typeof window === 'undefined';

// let INITIAL_STATE = map({});
// if (!isServer) {
//   INITIAL_STATE = map({
//     data: [...formData]
//   });
// }

const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem('data')) || [...formData]

  // data: [...formData]
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_REQUEST:
      localStorage.setItem('data', JSON.stringify(action.payload.values));
      return {
        ...state,
        data: action.payload.values
      };

    default:
      return state;
  }
};

export default reducer;
