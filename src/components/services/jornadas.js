import axios from "axios";

const jornadas = axios.create({
  baseURL: "https://api-d1-test.herokuapp.com/api/filter",
});

export default jornadas;
