import axios from 'axios';

export const changeCssVariable = (variableName, value) => {
  document.documentElement.style.setProperty(variableName, value);
};

export const customFetch = axios.create({
  baseURL: 'https://gabrielgourcerol.com/api',
  // baseURL: 'http://localhost:3000/api',
});
