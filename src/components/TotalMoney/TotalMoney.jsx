import "./style.css";
export function TotalMoney({ total }) {
  const totalList = total();
  return (
    <>
      {totalList == 0 ? (
        <></>
      ) : (
        <div className="totalMoney">
          <div>
            <h3>Valor Total</h3>
            <span>O valor se refere ao saldo</span>
          </div>
          <div>
            <h3 className="total">R$ {totalList}</h3>
          </div>
        </div>
      )}
    </>
  );
}
