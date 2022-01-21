const defaultCurrentReq = {
  // destination: null,
  offer: null,
};

export const currentReqReducer = (state = defaultCurrentReq, action) => {
  switch (action.type) {
    // case "updateCurrentDestination":
    //   return {
    //     ...state,
    //     destination: action.payload,
    //   };
    case "updateCurrentOffer":
      return {
        ...state,
        offer: action.payload,
      };
    case "clearCurrentOffer":
      return {
        ...state,
        offer: action.payload,
      };
    default:
      return state;
  }
};
