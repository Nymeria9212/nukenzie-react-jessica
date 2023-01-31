import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { List } from "./components/List/List";
import { TotalMoney } from "./components/TotalMoney/TotalMoney";

function App() {
  const [page, setPage] = useState("Home");
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: 150 },
  ]);
  console.log(listTransactions);
  function enterAplication() {
    setPage("NuPage");
  }

  function addValue(value, type, description) {
    const setvalue = { description, type: type, value };
    setListTransactions([...listTransactions, setvalue]);
  }
  function total() {
    const total = listTransactions.reduce((acumulat, valueItem) => {
      return valueItem.type == "saída"
        ? acumulat - Number(valueItem.value)
        : acumulat + Number(valueItem.value);
    }, 0);

    return total;
  }

  function remove(itemClick) {
    const list = listTransactions.filter((item, index) => index !== itemClick);
    setListTransactions(list);
  }

  return (
    <div className="App">
      {page == "Home" ? (
        <div className="Home-Logo">
          <div className="informPage">
            <div className="inform">
              <div className="image-home"></div>
              <h1>Centralize o controle das suas finanças</h1>
              <p>de forma rápida e segura</p>
              <button className="btn-PageUser" onClick={enterAplication}>
                Iniciar
              </button>
            </div>
          </div>
          <div className="ilustrationPage"></div>
        </div>
      ) : (
        <div className="userPage">
          <Header setPage={setPage} />
          <div className="main-User">
            <div className="section-1">
              <Form addValue={addValue} />
              <TotalMoney total={total} />
            </div>
            <div className="section-2">
              <List listTransactions={listTransactions} remove={remove} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
