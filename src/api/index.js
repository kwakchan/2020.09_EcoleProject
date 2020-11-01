import axios from "axios";

const api = axios.create({
  baseURL: "http://34.64.75.54"
});

api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.put['Content-Type'] = 'application/json'; 