import axios from "axios";

const a = ''

const filtro = axios.create({
  baseURL: `https://api-d1-test.herokuapp.com/api/journey/${a}`,
  
});

export default filtro;
