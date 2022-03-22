const axios = require("axios");

export const api = axios.create({
  baseURL: process.env.REACT_APP_api_base_url,
  timeout: 16000,
  headers: {}
});
