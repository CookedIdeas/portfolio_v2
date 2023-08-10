export const changeCssVariable = (variableName, value) => {
  document.documentElement.style.setProperty(variableName, value);
};
