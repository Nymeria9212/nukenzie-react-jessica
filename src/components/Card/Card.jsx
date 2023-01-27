import "./style.css";

export function Card({ transaction, index }) {
  return (
    <>
      <li>
        <div>
          <h3>{transaction.description}</h3>
          <p>{transaction.type}</p>
        </div>
        <div className="div-btn-card">
          <span>{`R$ ${transaction.value}`}</span>
          <button
            className="trashItem"
            onClick={() => {
              remove(index);
            }}
          ></button>
        </div>
      </li>
    </>
  );
}
