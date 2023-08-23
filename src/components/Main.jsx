import React from "react";

import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

import brigadeiro from "../assets/brigadeiro.jpg";
import trufa from "../assets/trufa.jpg";
import brownie from "../assets/brownie.jpg";
import casquinha from "../assets/casquinha.jpg";
import Search from "./Search";

const Main = () => {
  const [search, setSearch] = useState("");

  const Products = [
    {
      id: 1,
      img: brigadeiro,
      description: "lorem ipsum dolar",
      title: "brigadeiro",
      price: 8,
    },
    {
      id: 2,
      img: trufa,
      description: "lorem ipsum dolar",
      title: "trufa",
      price: 8,
    },
    {
      id: 3,
      img: brownie,
      description: "lorem ipsum dolar",
      title: "brownie",
      price: 8,
    },
    {
      id: 4,
      img: casquinha,
      description: "lorem ipsum dolar",
      title: "casquinha",
      price: 8,
    },
    {
      id: 5,
      img: brigadeiro,
      description: "lorem ipsum dolar",
      title: "brigadeiro",
      price: 8,
    },
    {
      id: 6,
      img: trufa,
      description: "lorem ipsum dolar",
      title: "trufa",
      price: 8,
    },
    {
      id: 7,
      img: brownie,
      description: "lorem ipsum dolar",
      title: "brownie",
      price: 8,
    },
    {
      id: 8,
      img: casquinha,
      description: "lorem ipsum dolar",
      title: "casquinha",
      price: 8,
    },
  ];

  // const filteredProducts = Products.filter((produto) =>
  //   produto.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <div className="w-full relative">
      <div className="pt-10">
        <div className="header flex items-center p-4 pb-10 bg-white">
          <h1 className="text-3xl font-bold" style={{ fontSize: "2.5rem" }}>
            Candy Place
          </h1>
          <div className="search flex items-center ml-auto px-8  py-2 bg-slate-100 rounded-full">
            <Search search={search} setSearch={setSearch} />
            <button className="">
              <CiSearch />
            </button>
          </div>
        </div>
        <div className="categories w-full flex space-x-3 px-4 pb-20">
          <div className="bg-slate-600 text-white px-8 py-2 rounded-">
            <p>brigadeiros</p>
          </div>
          <div className="bg-slate-100 px-8 py-2 rounded-full">
            <p>trufas</p>
          </div>
          <div className="bg-slate-100 px-8 py-2 rounded-full">
            <p>brownie</p>
          </div>
          <div className="bg-slate-100 px-8 py-2 rounded-full">
            <p>casquinha</p>
          </div>
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {Products.filter((produto) =>
          produto.title.toLowerCase().includes(search.toLowerCase())
        ).map((produto) => {
          return (
            <div
              key={produto.id}
              className="product h-[300px] bg-white drop-shadow-2x1 p-2 border"
            >
              <img
                src={produto.img}
                alt="title"
                className="w-full h-[60%] object-cover p-2"
              />
              <div className="m-2 bg-gray-100 p-2">
                <h1 className="text-x1 font-semibold">{produto.title}</h1>
                <p className="text-sm">{produto.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold">R${produto.price}.00</p>
                  <CiShoppingCart size={"1.4rem"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
