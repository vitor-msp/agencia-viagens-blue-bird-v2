const defaultCurrentReq = {
  destination: null,
  sale: null,
};

export const currentReqReducer = (state = defaultCurrentReq, action) => {
  switch (action.type) {
    case "updateCurrentDestination":
      return {
        ...state,
        destination: action.payload,
      };

    default:
      return state;
  }
};
