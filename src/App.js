import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer msg="All Products" />}/>
      <Route path="/category/:categoryid" element={<ItemListContainer/>}/>  
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>  
      <Route path="/cart" element={<ItemDetailContainer/>}/>
      <Route/>
      </Routes>
      
      
      </BrowserRouter>
      <header>
        <p className="text-slate-500 hover:text-blue-600 text-center text-4xl">
          Welcome to Guitar Shop
        </p>
      </header>
    </div>
  );
}

export default App;
