export const validateEmail = (data) => {
  if (data.indexOf(";") > 0) {
    const inputData = data.split(";");
    let isValid = true;
    inputData.forEach((item) => {
      if (!/^([a-zA-Z0-9.]+)@([a-zA-Z])+.([a-zA-Z])+$/.test(item))
        isValid = false;
    });
    return isValid;
  }
  return /^([a-zA-Z0-9.]+)@([a-zA-Z])+.([a-zA-Z])+$/.test(data);
};
export const addToErrorList = (errorMessage, errorList, setErrorList) => {
  const indexOf = errorList && errorList.indexOf(errorMessage);
  if (indexOf < 0) setErrorList([...errorList, errorMessage]);
};

export const removeFromErrorList = (errorMessage, errorList, setErrorList) => {
  const index = errorList && errorList.indexOf(errorMessage);

  if (index >= 0) {
    const errors = errorList;
    errors.splice(index, 1);
    setErrorList(errors);
  }
};
