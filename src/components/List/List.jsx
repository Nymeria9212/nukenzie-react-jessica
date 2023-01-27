import { Card } from "../Card/Card";
import { v4 as uuid } from "uuid";
import "./style.css";
export function List({ listTransactions, remove }) {
  return (
    <>
      {listTransactions.length == 0 ? (
        <div>
          <img className="imgOff" src="../../assets/notvalue.svg" alt="" />
        </div>
      ) : (
        <ul>
          <h2>Resumo financeiro</h2>
          {listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              index={index}
              remove={remove}
            />
          ))}
        </ul>
      )}
    </>
  );
}
