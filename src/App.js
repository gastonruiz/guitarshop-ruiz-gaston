import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="">
      <NavBar />
      <ItemListContainer msg="Aca va el Catálogo" />

      <header>
        <p className="text-slate-500 hover:text-blue-600 text-center text-4xl">
          Welcome to Guitar Shop
        </p>
      </header>
    </div>
  );
}

export default App;
