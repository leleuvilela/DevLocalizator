//types

export const Types = {
  ADD_REQUEST: 'devs/ADD_REQUEST',
  ADD_SUCCESS: 'devs/ADD_SUCCESS',
  ADD_FAILURE: 'devs/ADD_FAILURE',
  REMOVE: 'devs/REMOVE'
};

//reducer

const INITIAL_STATE = {
  loading: false,
  data: []
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      console.tron.log(action.payload.error);
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(state => state.id !== action.payload.id)
      };
    default:
      return state;
  }
}

//actions

export const Creators = {
  addDevRequest: (latitude, longitude, user) => ({
    type: Types.ADD_REQUEST,
    payload: { latitude, longitude, user }
  }),
  addDevSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),
  addDevFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  }),
  removeDev: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};
