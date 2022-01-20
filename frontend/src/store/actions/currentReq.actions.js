export const updateCurrentDestination = (id) => {
  return {
    type: "updateCurrentDestination",
    payload: id,
  };
};