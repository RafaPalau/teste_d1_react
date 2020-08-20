import React, { Component } from "react";
import jornadas from "./components/api/jornadas";

class App extends Component {
  state = {
    info: [],
  };
  async componentDidMount() {
    const response = await jornadas.get("");
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    return <>
    <h1>Jornadas</h1>

      {/* Listando os itens da jornada */}
    {info.map((jornadas) => (
      <li key={jornadas}> {jornadas.name} {jornadas.quantity}</li>
    ))}


    {console.log(info)}
    
    </>;
  }
}

export default App;
