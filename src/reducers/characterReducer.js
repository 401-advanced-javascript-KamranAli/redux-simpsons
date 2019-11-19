import { SET_CHARACTER } from '../actions/actions';

const initialState = {
  photoUrl: '',
  name: '',
  profession: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_CHARACTER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
