import React, { use, useContext } from "react";
import { Link, Links, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import ThemController from "./ThemController";
import { FiLogOut, FiUserCheck } from "react-icons/fi";
import { IoIosGitPullRequest } from "react-icons/io";
import { MdAddChart, MdOutlineDashboardCustomize } from "react-icons/md";
import { IoBrushOutline } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { RiHome4Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const { dbUser } = useContext(AuthContext);

  const li = (
    <>
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets">Pets</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
    </>
  );

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully logged out.");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/");
  };

  return (
    <nav className="navbar lg:h-[8vh] h-auto bg-base-100 shadow-sm lg:px-20 pl-1 px-5 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-base-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {li}
          </ul>
        </div>
        <Link to="/" className="lg:text-2xl text-xl font-bold flex items-center gap-1">
          <img className="lg:h-10 lg:w-10 h-8 w-8" src="/logo.png" alt="" />
          <span>
            <span className="primary-text">Paw</span>
            <span className="secondary-text">Mart</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="nav" className="menu menu-horizontal px-1 font-medium menu-nav my-nav">
          {li}
        </ul>
      </div>

      <div className="navbar-end flex gap-1.5">
        {user ? (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end ">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <img src={`${dbUser.photoURL}`} alt="user photo" className="w-10 h-10 object-cover rounded-full"></img>
              </div>
              <ul tabIndex="-1" className="dropdown-content menu min-w-58 bg-base-100 rounded-box z-1 p-2 shadow-sm font-semibold">
                <li className="mb-1">
                  <div className="flex">
                    <div className="">
                      <img src={`${dbUser.photoURL}`} alt="user photo" className="w-9 h-9 object-cover rounded-full"></img>
                    </div>
                    <div className="">
                      <p className="text-xs">{dbUser.name}</p>
                      <p className="text-gray-600 text-[11px]">{dbUser.role}</p>
                    </div>
                  </div>
                </li>
                <hr className="bg-gray-200 h-[1.5px] border-none" />
                <ul className="py-1">
                  {dbUser.role === "admin" && (
                    <li>
                      <Link to="/dashboard" className="text-xs py-1.5 flex gap-2">
                        {" "}
                        <MdOutlineDashboardCustomize className="text-base" /> Admin Dashboard{" "}
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link to="/add-product-form" className="text-xs py-1.5 flex gap-2">
                      <MdAddChart className="text-base" /> Add Item
                    </Link>
                  </li>
                  <li>
                    <Link to="/create-adopt-post" className="text-xs py-1.5 flex gap-2">
                      <RiHome4Line className="text-base" /> Adopt Your Pet
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-products" className="text-xs py-1.5 flex gap-2">
                      <FiUserCheck className="text-base" /> My Items
                    </Link>
                  </li>
                  <li>
                    <Link to="/my-orders" className="text-xs py-1.5 flex gap-2">
                      <IoIosGitPullRequest className="text-base" /> My Orders
                    </Link>
                  </li>
                  <li>
                    <div className="flex justify-between items-center py-1">
                      <div className="flex gap-2 text-xs">
                        <IoBrushOutline className="text-base" />
                        Theme
                      </div>
                      <div className="">
                        <ThemController></ThemController>
                      </div>
                    </div>
                  </li>
                </ul>
                <hr className="bg-gray-200 h-px border-none mb-1" />
                <li>
                  <button onClick={handleLogOut} className="text-xs">
                    <FiLogOut className="text-base" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="h-8 btn bg-linear-to-tr from-[#ff6a00] to-[#ffb03a] text-white border-none hover:shadow-none">
              Login
            </Link>
            <Link to="/auth/register" className="h-8 btn bg-transparent primary-text border-[#ff9900] hover:shadow-none">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
