import { ButtonTrash } from "../ButtonTrash/ButtonTrash";
import "./style.css";

export function Card({ transaction, index, remove }) {
  return (
    <>
      <li>
        <div>
          <h3>{transaction.description}</h3>
          <p>{transaction.type}</p>
        </div>
        <div className="div-btn-card">
          <span>{`R$ ${transaction.value}`}</span>
          <ButtonTrash remove={remove} index={index} />
        </div>
      </li>
    </>
  );
}
