import { Link, NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import author from "../../assets/logo1.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaHamburger } from "react-icons/fa";

const Navigation = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [hamburger, setHamburger] = useState(false);

  const handleLogOut = () => {
    LogOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMenuClasses = () => {
    return hamburger
      ? "visible inset-x-28 -bottom-16 delay-300 duration-300"
      : "inset-x-28 bottom-64 delay-75 duration-700 bg-transparent";
  };

  return (
    <div>
      <nav className="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-5 px-5 md:static relative">
        <ul>
          <Link to="/">
            <li className="bg-[#212121] w-14 h-14 rounded-full flex justify-center items-center hover:border-2 hover:border-[#F9B900] hover:duration-75">
              <h1 className="text-center">EMM</h1>
            </li>
          </Link>
        </ul>
        <ul>
          <div className="md:hidden visible mt-4">
            <button
              className="text-2xl"
              onClick={() => setHamburger(!hamburger)}
            >
              <FaHamburger />
            </button>
          </div>
          <div
            className={`flex md:visible ${getMenuClasses()} justify-center md:gap-8 gap-4 md:px-0 md:py-0 px-3 py-3 z-10 md:text-lg md:flex-row flex-col font-medium md:static absolute md:border-0 md:bg-[#2B4F43] bg-[#212121]`}
          >
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "active border-b-2 text-[#F9B900] border-b-[#F9B900]"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            {user ? (
              ""
            ) : (
              <>
                <li>
                  <NavLink
                    to={"/login"}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active border-b-2 text-[#F9B900] border-b-[#F9B900]"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Sign in
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/register"}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active border-b-2 text-[#F9B900] border-b-[#F9B900]"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}

            {user && (
              <>
                <li>
                  <NavLink
                    to={"/profile"}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active border-b-2 text-[#F9B900] border-b-[#F9B900]"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/dashboard"}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active border-b-2 text-[#F9B900] border-b-[#F9B900]"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
          </div>
        </ul>
        <ul className="flex items-center gap-3">
          {user ? (
            <>
              <li>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full ">
                    <div>
                      <img
                        className="w-12 h-12 rounded-full"
                        src={user.photoURL ? user.photoURL : author}
                        alt=""
                      />
                    </div>
                  </div>
                  <h1>
                    {user.displayName ? user.displayName : "Unknown User"}
                  </h1>
                </div>
              </li>
              <li>
                <Button onClick={handleLogOut}>Log Out</Button>
              </li>
            </>
          ) : (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
