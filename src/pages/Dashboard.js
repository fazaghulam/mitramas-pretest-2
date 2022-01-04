import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardData from "../components/CardData";
import CardModal from "../components/CardModal";

export default function Dashboard() {
  let navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selItem, setSelItem] = useState({});

  useEffect(() => {
    axios
      .get("https://mitramas-test.herokuapp.com/motor", {
        headers: {
          Authorization: localStorage.getItem("user-token"),
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setData(resp.data.data);
          setFilteredData(resp.data.data);
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate(`/login`);
        }
      });
  }, [showModal]);

  const handleCard = (item) => {
    setSelItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelItem({});
  };

  useEffect(() => {
    if (status === "true") {
      const filteredData = data.filter((list) => list.status == true);
      setFilteredData(filteredData);
    } else if (status === "false") {
      const filteredData = data.filter((list) => list.status == false);
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [status]);

  useEffect(() => {
    if (sort === "dsc") {
      const sortedData = filteredData.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
      setFilteredData(sortedData);
    } else if (sort === "asc") {
      const sortedData = filteredData.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        return nameA < nameB ? 1 : nameA > nameB ? -1 : 0;
      });
      setFilteredData(sortedData);
    }
  }, [sort]);

  useEffect(() => {
    const filteredList = data.filter((list) => list.name.toString().toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filteredList);
  }, [search]);

  return (
    <div className="px-8 py-10">
      <CardModal item={selItem} show={showModal} close={handleClose} />
      <div className="flex justify-between mb-10">
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
        <button className="green-btn rounded-lg shadow-xl text-white font-semibold px-8 py-2" onClick={() => setShowModal(true)} type="submit">
          + New Data
        </button>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {filteredData.map((item, idx) => (
          <div key={idx} onClick={() => handleCard(item)}>
            <CardData item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
