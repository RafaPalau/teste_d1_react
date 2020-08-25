import axios from "axios";


// var aValue = localStorage.getItem('indice');

let value = ''

export const filtro = axios.create({
  baseURL: `https://api-d1-test.herokuapp.com/api/journey/${value}`,
});

export default filtro;
