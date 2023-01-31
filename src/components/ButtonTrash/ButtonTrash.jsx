import "./style.css";
import trash from "../../assets/Trash.svg";
export function ButtonTrash({ remove, index }) {
  return (
    <button
      className="trash"
      onClick={() => {
        remove(index);
      }}
    >
      <img src={trash} alt="" />
    </button>
  );
}
