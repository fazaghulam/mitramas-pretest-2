import { useState } from "react";

export default function CardModal({ show, close }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleCancel = () => {};
  const handleRequest = () => {};

  if (!show) return null;

  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-transparent flex items-center justify-center">
      <div className="invisible md:visible md:w-screen lg:w-2/5 md:mx-5 py-3 px-6 shadow-xl rounded-md justify-self-end bg-white">
        <div className="flex justify-end">
          <svg
            onClick={close}
            className="w-6 h-6 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className="font-bold text-2xl text-center">{"New Data"}</p>
        <div className="py-2 mt-2 border-b border-black">
          <p className="font-semibold">Name</p>
          <input
            className="appearance-none bg-transparent w-full text-gray-700 px-2 py-1 leading-tight focus:outline-none border-none"
            placeholder="type name here"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="py-2 mt-6 border-b border-black">
          <p className="font-semibold">Description</p>
          <input
            className="appearance-none bg-transparent w-full text-gray-700 px-2 py-1 leading-tight focus:outline-none border-none"
            placeholder="type name here"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <p className="font-semibold">Status</p>
          <select className="border rounded-lg text-sm px-2 py-1 w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value={true}>true</option>
            <option value={false}>false</option>
          </select>
        </div>
        <div className="mt-10 flex justify-center">
          <button className="bg-white hover:bg-gray-300 shadow-xl text-biruTua rounded-lg px-3 py-1 mx-2" onClick={handleCancel}>
            Cancel
          </button>
          <button className="text-white rounded-lg px-3 py-1 mx-2 green-btn" onClick={handleRequest} disabled={loading}>
            {loading ? <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-4 w-4" /> : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
