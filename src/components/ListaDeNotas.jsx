import React, { Component } from "react";
import CardNota from "./cardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria) => {
            return (
              <li>
                <p>{categoria}</p>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
export default ListaDeNotas;
