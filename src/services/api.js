const axios = require("axios");

const api = axios.create({
  // baseURL: process.env.API || "http://localhost:3333",
  baseURL: "https://app-radar-dev.herokuapp.com/",
});

export default api;
