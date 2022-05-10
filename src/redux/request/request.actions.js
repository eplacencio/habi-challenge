import { SAVE_REQUEST } from './request.types';

export const saveRequest = (values) => {
  return {
    type: SAVE_REQUEST,
    payload: {
      values
    }
  };
};
