import React, { useState } from "react";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../Components/Header";
import autoayuda from "../DB/autoAyuda";
import { useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Cart = () => {
  const id = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(id);

  const ids = [1, 2];

  const [librosMostrar, setLibrosMostrar] = useState([]);

  useEffect(() => {
    setLibrosMostrar([...autoayuda]);
  }, [0]);

  const array = [];

  const value = cart.map((prod) => {
    array.push(prod.price * prod.quantity);
  });
  const codeP = 10;
  //parametros rest
  const subtotal = (array) => {
    let totall = 0;
    for (const arr of array) {
      totall += parseFloat(arr);
    }
    return totall;
  };

  const total = (codeP) => {
    const porcentajecode = (subtotal(array) * parseFloat(codeP)) / 100;
    const final = parseFloat(subtotal(array)) - parseFloat(porcentajecode);
    console.log(porcentajecode);
    return final.toFixed(2);
  };

  return (
    <div className="mb-8 flex flex-col justify-center items-center ">
      <Header />

      <h2 className="text-3xl px-8 py-4 pt-8">Carrito de compras</h2>

      <div className="max-w-4xl mb-8">
        {cart.map((prod) => (
          <div>
            <div className="flex p-4 gap-4 justify-between max-w-3xl">
              <div className="flex gap-4">
                <div className="h-20 w-16">
                  <img src={prod.photoUrl} alt="foto de libro" />
                </div>
                <div className="flex flex-col justify-between self-start">
                  <div className="mb-4">
                    <h3 className="font-semibold text-base">{prod.name}</h3>
                    <h4 className="font-light text-xs">{prod.author}</h4>
                  </div>
                  <div className="flex gap-1 items-center">
                    <AiOutlineMinusCircle className="text-lg" />
                    <h3 className="text-lg">{prod.quantity} </h3>
                    <AiOutlinePlusCircle />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <BsTrash />
                <h3>${prod.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {
          <div className="mb-8">
            <div className="flex gap-4 justify-between max-w-3xl w-80">
              <h4>subtotal:</h4>
              <h4>{subtotal(array)} $</h4>
            </div>
            <div className="flex gap-4 justify-between max-w-3xl w-80">
              <h4>Código promocional</h4>
              <h4>{codeP}%</h4>
            </div>
            <div className="flex gap-4 justify-between max-w-3xl w-80">
              <h4>Total</h4>
              <h4>{total(codeP)} $</h4>
            </div>
          </div>
        }
      </div>

      <NavLink
        to={"/pay"}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <button className=" bg-[#FDB849] px-12 py-2 font-semibold rounded-3xl">
          Iniciar compra
        </button>
      </NavLink>
    </div>
  );
};

export default Cart;
