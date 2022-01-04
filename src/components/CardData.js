import { useState } from "react";

export default function CardData({ id, name, description, status }) {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    setShow(!show);
    e.stopPropagation();
  };

  return (
    <div className="relative bg-white shadow-lg rounded-lg h-40 w-96 px-6 py-4" onClick={() => setShow(false)}>
      <div className="flex justify-end">
        <svg
          onClick={handleShow}
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
          />
        </svg>
      </div>
      <div className={show ? "w-20 absolute z-40 top-10 right-6 bg-gray-200 rounded-md shadow-lg cursor-pointer" : "hidden"}>
        <div className="px-2 hover:bg-gray-300 rounded-t-md">edit</div>
        <div className="px-2 hover:bg-gray-300 rounded-b-md">delete</div>
      </div>
      <div className="flex">
        <p className="mr-2 font-semibold">Name:</p>
        <p>{name}</p>
      </div>
      <div className="flex mt-3">
        <p className="mr-2 font-semibold">Description:</p>
        <p className="truncate">{description}</p>
      </div>
      <div className="flex mt-3">
        <p className="mr-2 font-semibold">Status:</p>
        <p>{status.toString()}</p>
      </div>
    </div>
  );
}
