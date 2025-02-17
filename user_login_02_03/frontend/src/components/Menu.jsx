import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function Menu() {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);
  const token = sessionStorage.getItem("userToken");

  return (
    <nav className="bg-black py-4 px-2 flex justify-between">
      {token ? 
        <>
          <ul className="list-style-none flex pl-4">
            <li className="bg-gray-600 px-2 py-1 mx-2 rounded shadow-sm">
              <a
                className="text-blue-100 hover:text-blue-100 transition-all duration-150"
              >
                Home
              </a>
            </li>
            <li className="bg-gray-600 px-2 py-1 mx-2 rounded shadow-sm">
              <Link to="/vedett"
                className="text-blue-100 hover:text-blue-100 transition-all duration-150"
              >
                Vedett Info
              </Link>
            </li>
            <li className="bg-gray-600 px-2 py-1 mx-2 rounded shadow-sm">
              <a
                onClick={()=>{logout();navigate("/")}}
                className="text-blue-100 hover:text-blue-100 transition-all duration-150"
              >
                Kilepes
              </a>
            </li>
          </ul>
        </>
       : 
        <>
          <div>
            <Link to="/login" className="bg-white rounded shadow-md px-2 py-1">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-white rounded shadow-md px-2 py-1 ml-5"
            >
              Register
            </Link>
          </div>
        </>
      }

      <Link to="/" className="text-3xl text-bold text-base-300">
        GSZI Frontend User
      </Link>
    </nav>
  );
}

export default Menu;
