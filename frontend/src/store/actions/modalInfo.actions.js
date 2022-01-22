export const updateModalInfo = (info) => {
  return {
    type: "updateModalInfo",
    payload: info,
  };
};
export const clearModalInfo = () => {
  return {
    type: "clearModalInfo",
    payload: null,
  };
};