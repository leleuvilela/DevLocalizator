//types

export const Types = {
  SHOW: 'modal/SHOW',
  HIDE: 'modal/HIDE'
};

//reducer

const INITIAL_STATE = {
  visible: false,
  coordinates: [-49.268278952, -16.675231682]
};

export default function devs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW:
      return {
        coordinates: [action.payload.longitude, action.payload.latitude],
        visible: true
      };
    case Types.HIDE:
      return {
        ...state,
        visible: false
      };
    default:
      return state;
  }
}

//actions

export const Creators = {
  openModal: (longitude, latitude) => ({
    type: Types.SHOW,
    payload: { longitude, latitude }
  }),
  hideModal: () => ({
    type: Types.HIDE
  })
};
