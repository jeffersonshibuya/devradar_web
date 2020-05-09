const axios = require("axios");

const api = axios.create({
  baseURL: process.env.API || "http://localhost:3333",
});

export default api;
