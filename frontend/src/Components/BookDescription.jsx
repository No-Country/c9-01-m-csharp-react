import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";
import { AiOutlineRight, AiOutlineDown, AiOutlineLine } from "react-icons/ai";
import { SlStar } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import Footer from "./Footer";
import { Collapse } from "react-collapse";
import autoayuda from "../DB/autoAyuda";
import arteYdisenio from "../DB/arteYdisenio";
import { useDispatch, useSelector } from "react-redux";
import { setProductGlobal } from "../store/slices/products.slices";
import { setCartGlobal } from "../store/slices/cart.slice";

const AccordionItem = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-[15px]">
      <div
        onClick={toggle}
        className="w-full bg-white  flex justify-between items-center cursor-pointer"
      >
        <p className="text-[18px]">Descripción del producto</p>
        <div className="text-[30px]">
          {open ? <AiOutlineLine /> : <AiOutlineDown />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-white px-3 pt-2">
          <h2 className="text-[18px]">Sinopsis</h2>
          <p className="text-[10px]">{description}</p>
        </div>

        <div className="bg-white px-3 pt-2">
          <h2 className="text-[18px]">Reseñas</h2>
          <p className="text-[10px]">{description}</p>
        </div>
      </Collapse>
    </div>
  );
};

const BookDescription = () => {
  const [open, setOpen] = useState(false);
  let { bookDescription, categoryName } = useParams();

  const products = useSelector((state) => state.products);

  const [libroDatos, setLibrosDatos] = useState({});

  //  redux

  const dispatch = useDispatch();
  const addToCart = () => {
    const cartProduct = products.find((prod) => prod.id === bookDescription);
    dispatch(setCartGlobal(cartProduct));
  };
  // redux
  useEffect(() => {
    if (categoryName === "Autoayuda") {
      const result = autoayuda.filter((libro) => libro.id === bookDescription);
      const ahoraSi = result["0"];

      setLibrosDatos({ ...ahoraSi });
    }

    if (categoryName === "Arte y Diseño") {
      const result = arteYdisenio.filter(
        (libro) => libro.id === bookDescription
      );
      const ahoraSi = result["0"];

      setLibrosDatos({ ...ahoraSi });
    }
  }, []);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  let accordionData = [
    {
      title: "this is a demo title",
      description: "lorem ipsum",
    },
  ];

  return (
    <>
      <Header />

      <div className="p-7 md:mb-10">
        <div id="bookDescription">
          <p className="flex items-center">
            <span>
              {" "}
              <Link to={"/library"}>Biblioteca</Link>
            </span>
            <span className="mx-3">
              {" "}
              <AiOutlineRight />
            </span>
            <span>
              <Link to={`/library/${categoryName}`}>{categoryName}</Link>
            </span>
          </p>
        </div>

        <div className="w-full grid grid-cols-12 ">
          <div id="book" className="w-full my-5 md:col-span-6 col-span-12">
            <img
              className="w-[190px] h-[260px] mx-auto"
              src={libroDatos.photoUrl}
              alt="image"
            />
          </div>

          <div className="md:col-span-6 col-span-12">
            <div className="flex items-center justify-between">
              <h2 id="nameBook" className="text-4xl">
                {libroDatos.name}
              </h2>
              <p id="price" className="text-3xl">
                {" "}
                <span>$</span> {libroDatos.price}
              </p>
            </div>

            <p id="author" className="my-2">
              {libroDatos.author}
            </p>
            <div id="valoration" className="flex">
              <SlStar className="mr-2" />
              <SlStar className="mx-2" />
              <SlStar className="mx-2" />
              <SlStar className="mx-2" />
              <SlStar className="mx-2" />
            </div>

            <div className="w-full mt-6 grid gap-3 grid-cols-12">
              <button
                className="bg-stone-200 col-span-10 py-2"
                onClick={addToCart}
              >
                Añadir al carrito
              </button>
              <button className="bg-stone-200 col-span-2 py-2 flex items-center justify-center">
                <FcLike />
              </button>
            </div>

            <section className="grid">
              {accordionData.map((data, index) => {
                return (
                  <AccordionItem
                    key={index}
                    open={index === open}
                    title={data.title}
                    description={data.description}
                    toggle={() => {
                      toggle(index);
                    }}
                  />
                );
              })}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDescription;
