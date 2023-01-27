import "./style.css";
import { useState } from "react";
export function Form({ addValue }) {
  const [value, setValue] = useState("");
  const [valueDescription, setValueDescription] = useState("");
  const [type, setSelect] = useState("");

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="div-1">
        <h3>Descrição</h3>
        <input
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setValueDescription(event.target.value)}
        />
        <p>Ex:Compra de roupas</p>
      </div>
      <div className="div-2">
        <div>
          <label htmlFor="value-input">Valor</label>
          <input
            name="value"
            type={"number"}
            id="value-input"
            onChange={(event) => setValue(Number(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="select-value">Tipo de valor</label>
          <select
            name="type"
            id="selet-value"
            onChange={(event) => setSelect(event.target.value)}
          >
            <option>Escolher tipo</option>
            <option
              onChange={(event) => setSelect(event.target.value)}
              name="type"
              value="entrada"
            >
              Entrada
            </option>
            <option
              onChange={(event) => setSelect(event.target.value)}
              name="type"
              value="saida"
            >
              Saída
            </option>
          </select>
        </div>
      </div>
      <button
        onClick={() => {
          addValue(value, type, valueDescription);
        }}
        type="submit"
      >
        Cadastrar valor
      </button>
    </form>
  );
}
