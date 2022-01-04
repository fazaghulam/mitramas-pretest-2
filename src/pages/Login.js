import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  const handleLogin = () => {
    setLoading(true);
    axios
      .post("https://mitramas-test.herokuapp.com/auth/login", {
        email,
        password,
      })
      .then((resp) => {
        if (resp.status === 200) {
          localStorage.setItem("user-token", resp.data.access_token);
          navigate(`/`);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="login flex h-screen justify-center items-center">
      <div className="card w-96 h-1/2 px-2 md:px-4 lg:px-8 py-14 rounded-md shadow-lg">
        <p className="text-black text-base md:text-lg lg:text-xl font-bold w-full text-center mb-12">Login into account</p>
        <div className="bg-white shadow-xl h-10 md:h-12 px-4 rounded-lg flex border-2 border-transparent mt-4 focus-within:border-emerald-700">
          <input
            className="w-11/12 h-full rounded-lg outline-none bg-white placeholder-gray-600 text-gray-600"
            type="text"
            placeholder="type email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="bg-white shadow-xl h-10 md:h-12 px-4 rounded-lg flex border-2 border-transparent mt-4 focus-within:border-emerald-700">
          <input
            className="w-11/12 h-full rounded-lg outline-none bg-white placeholder-gray-600 text-gray-600"
            type="password"
            placeholder="type password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="green-btn rounded-lg shadow-xl text-white font-bold px-16 md:px-20 py-2"
            onClick={handleLogin}
            type="submit"
            disabled={loading}
          >
            {loading ? <div className="loader ease-linear rounded-full border-2 border-t-2 border-gray-400 h-6 w-6"></div> : <p>Sign in</p>}
          </button>
        </div>
      </div>
    </div>
  );
}
