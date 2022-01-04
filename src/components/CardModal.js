import { useState, useEffect } from "react";
import axios from "axios";

export default function CardModal({ item, show, close }) {
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [delLoading, setDelLoading] = useState(false);

  useEffect(() => {
    if (item.id) {
      setId(item.id);
      setName(item.name);
      setDescription(item.description);
      setStatus(item.status);
    } else {
      setId(null);
      setName("");
      setDescription("");
      setStatus(true);
    }
  }, [show]);

  const handleUpdate = () => {
    setLoading(true);
    axios
      .put(
        "https://mitramas-test.herokuapp.com/motor",
        { id, name, description, status },
        { headers: { Authorization: localStorage.getItem("user-token") } }
      )
      .then((resp) => {
        if (resp.status === 200) {
          setLoading(false);
          close();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleCreate = () => {
    setLoading(true);
    axios
      .post(
        "https://mitramas-test.herokuapp.com/motor",
        { name, description, status },
        { headers: { Authorization: localStorage.getItem("user-token") } }
      )
      .then((resp) => {
        if (resp.status === 200) {
          setLoading(false);
          close();
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleDelete = () => {
    setDelLoading(true);
    axios
      .delete("https://mitramas-test.herokuapp.com/motor", {
        headers: { Authorization: localStorage.getItem("user-token") },
        data: { id },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setDelLoading(false);
          close();
        }
      })
      .catch((err) => {
        console.log(err);
        setDelLoading(false);
      });
  };

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
        <p className="font-bold text-2xl text-center">{item.id ? "Edit Data" : "New Data"}</p>
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
          {item.id ? (
            <button
              className="bg-white hover:bg-gray-300 shadow-xl text-biruTua rounded-lg px-3 py-1 mx-2"
              onClick={handleDelete}
              disabled={delLoading}
            >
              {delLoading ? (
                <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-4 w-4" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              )}
            </button>
          ) : null}
          <button className="bg-white hover:bg-gray-300 shadow-xl text-biruTua rounded-lg px-3 py-1 mx-2" onClick={close}>
            Cancel
          </button>
          {item.id ? (
            <button className="text-white rounded-lg px-3 py-1 mx-2 green-btn" onClick={handleUpdate} disabled={loading}>
              {loading ? <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-4 w-4" /> : "Edit"}
            </button>
          ) : (
            <button className="text-white rounded-lg px-3 py-1 mx-2 green-btn" onClick={handleCreate} disabled={loading}>
              {loading ? <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-4 w-4" /> : "Create"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
