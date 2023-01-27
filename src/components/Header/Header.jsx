import "./style.css";

export function Header({ setPage }) {
  function home() {
    setPage("Home");
  }
  return (
    <header>
      <div className="imageNu"></div>
      <button onClick={home}>Início</button>
    </header>
  );
}
