export const getIsEmailSent = (state) => {
  return state.entity.isEmailSent === true;
};

export const getIsAPIError = (state) => {
  return state.entity.isAPIError === true;
};
