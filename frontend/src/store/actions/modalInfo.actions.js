export const updateModalInfo = (info, isGetPurchase = false) => {
  return {
    type: "updateModalInfo",
    payload: {
      info,
      isGetPurchase,
    },
  };
};
export const clearModalInfo = () => {
  return {
    type: "clearModalInfo",
    payload: null,
  };
};
