import React from "react";
import { useGetPokemonByNameQuery } from "../services/UserApi";
import { Link, useParams } from "react-router-dom";

function ImagePage() {
  const { name, numb } = useParams();
  const { data, isLoading, isError } = useGetPokemonByNameQuery({ name, numb });
  console.log(data);
  if (isError) {
    return <p className="flex justify-center mt-7">DATA Fetching Error</p>;
  }
  if (isLoading) {
    return <h1 className="flex justify-center mt-7">Loading....</h1>;
  }
  return (
    <div className="p-4 flex flex-col mt-44 items-center">
      <h1 className="text-2xl font-mono text-fuchsia-500 font-bold mb-4">{name} Image</h1>

      <img src={data.sprites.front_default} alt={name} className="w-40 h-40" />
      <h1 className="capitalize font-stretch-ultra-expanded font-bold text-6xl text-amber-400">{name}</h1>
      <Link to={`/?${numb}`}><button className="mt-20 border-2 rounded-2xl px-6 py-2 bg-emerald-400 text-white ">Back👈</button></Link>
    </div>
  );
}

export default ImagePage;
