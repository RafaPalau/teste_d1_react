import axios from "axios";

export const filtro = axios.create({
  baseURL: `https://api-d1-test.herokuapp.com/api/journey`
});

export default filtro;
