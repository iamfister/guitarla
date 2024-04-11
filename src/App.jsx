/* eslint-disable react/jsx-key */
import { useState } from "react";

import { db } from "./data/db";

import Header from "./components/Header";
import Guitar from "./components/Guitar";

function App() {
  const [data, setData] = useState(db); // only local
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id == item.id);

    if (itemExist >= 0) {
      console.log("el elemento ya existe");
      const updateCart = [...cart]
      updateCart[itemExist].quantity++
      setCart(updateCart)
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  return (
    <>
      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((p) => (
            <Guitar key={p.id} guitar={p} addCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
