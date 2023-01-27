import "./style.css";

export function Header({ setPage }) {
  function home() {
    setPage("Home");
  }
  return (
    <header>
      <img src="src/assets/Nu Kenzie-black.svg" alt="Logo Nu Kenzie" />
      <button onClick={home}>Início</button>
    </header>
  );
}
