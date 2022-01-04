import { useState, useEffect } from "react";

const statusOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "True",
    value: "true",
  },
  {
    label: "False",
    value: "false",
  },
];

const sortOptions = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "dsc",
  },
];

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("asc");

  const handleCreate = () => {};

  return (
    <div className="dashboard h-screen px-8 py-10">
      <div className="flex justify-between">
        <div className="flex">
          <div className="bg-white w-60 shadow-xl h-10 px-4 rounded-lg flex border-2 border-transparent">
            <input
              className="w-11/12 h-full rounded-lg outline-none bg-white placeholder-gray-600 text-gray-600"
              type="text"
              placeholder="search data"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex flex-wrap content-center cursor-pointer opacity-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <p className="ml-8 mr-2 self-center font-bold">status:</p>
          <select className="border rounded-lg shadow-xl w-60 text-sm px-2 py-1 w-full" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">all</option>
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <p className="ml-8 mr-2 self-center font-bold">sort by name:</p>
          <select className="border rounded-lg shadow-xl w-60 text-sm px-2 py-1 w-full" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
        <button className="green-btn rounded-lg shadow-xl text-white font-semibold px-8 py-2" onClick={handleCreate} type="submit">
          + New Data
        </button>
      </div>
    </div>
  );
}
