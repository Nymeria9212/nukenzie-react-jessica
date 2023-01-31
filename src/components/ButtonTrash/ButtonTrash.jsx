import "./style.css";
export function ButtonTrash({ remove, index }) {
  return (
    <button
      className="trash"
      onClick={() => {
        remove(index);
      }}
    ></button>
  );
}
