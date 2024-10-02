
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container fixed top-3 z-30 w-full">

      {/* Navbar for larger screens */}
      <div className="h-[70px] lg:h-[90px] w-full bg-[#091022] rounded-3xl flex justify-between items-center px-5 transform transition-all duration-300 hover:shadow-[0_0_0_2px] hover:shadow-primary">

        <div className="lg:hidden text-white font-bold text-2xl">LOGO</div>

        <Link to='/signup'><button className="btn-primary-hover hidden lg:flex bg-primary py-2 px-6 text-white rounded-xl text-lg font-semibold">
          Register
        </button>
        </Link>


        <ul className="hidden lg:flex space-x-8 items-center text-white text-lg font-semibold">
          <li >ABOUT</li>
          <li>EVENT</li>
          <li className="heading-3">LOGO</li>
          <li>BLOG</li>
          <li>SEARCH</li>
        </ul>

        <Link to='login'>
          <button className="btn-primary-hover hidden lg:flex bg-primary py-2 px-6 text-white rounded-xl text-lg font-semibold">
            Login
          </button>
        </Link>

        <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
          <Menu />
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-[#091022] p-6 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <button onClick={toggleMenu} className="text-white text-3xl mb-6">
          <X />
        </button>


        <ul className="space-y-6 text-white font-semibold text-xl">
          <li>ABOUT</li>
          <li>EVENT</li>
          <li>BLOG</li>
          <li>SEARCH</li>
        </ul>


        <div className="flex mt-8 space-x-4">
          <button className="btn-primary-hover bg-primary py-2 px-4 w-1/2 text-white rounded-xl text-lg font-semibold">
            Register
          </button>
          <button className="btn-primary-hover hover:text-white bg-white py-2 px-4 w-1/2 text-primary rounded-xl text-lg font-semibold">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
