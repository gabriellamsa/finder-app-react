import axios from "axios";

// 81280280/json

const api = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});

export default api;