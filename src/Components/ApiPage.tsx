import { useState } from "react";
import { useGetUserDataQuery } from "../services/UserApi";
import { Link } from "react-router-dom";

type Props = {};

function ApiPage({}: Props) {
  const [offset, setOffset] = useState(0);
  const { data, isLoading,isFetching } = useGetUserDataQuery(offset);
  const handlePrevious = () => {
    setOffset(offset - 20);
  };

  const handleNext = () => {
    setOffset(offset + 20);
  };

  return (
    <div className="font-light px-4 max-w-md mx-auto bg-white rounded-xl shadow-md mt-6">
      <ul className="list-disc pl-5 space-y-2 mb-4">
        {data?.results?.map((item: any, index: number) => (
          <li
            key={index}
            className="text-gray-700 capitalize flex justify-between "
          >
            {item.name}
            <Link to={`/details/${item.name}`}>
              <button className="bg-blue-200 rounded-2xl px-1 ">Open ↗️</button>
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-center ">
        <p className="mx-[45%] rounded-[8px] bg-gray-900 font-bold text-white border-2">
          {offset / 20 + 1}
        </p>
      </div>

      <div className="flex justify-between pb-6">
        <button
          onClick={handlePrevious}
          disabled={offset === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          Prev..
        </button>
        <button
          onClick={handleNext}
          disabled={isLoading || isFetching}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next..
        </button>
      </div>
    </div>
  );
}

export default ApiPage;
