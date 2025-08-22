import { Link, NavLink } from "react-router"
import { FaBarsStaggered, FaCartShopping } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }

];

const navber = navItems.map((item, index) => (
  <li key={index}>
<NavLink to={item.path}
  className={({ isActive }) => (isActive ? "primary-color font-bold" : "hover:text-[#E58411]") }
  >{item.name}
  </NavLink>
  </li>
));
const Header = () => {
  const [isOpnen, setIsOpen] =useState(false);
  const [isScrolled, setIsScrolled]=useState(false);
  
  const toggleMenu =()=>{
      setIsOpen(prevState =>!prevState);
  }
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY >50){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return ()=>{
       window.addEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-10 pt-4 transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-md text-gray-800 py-3': 'bg-transparent text-white'}`}>
        <nav className="max-w-screen-2xl mx-auto flex justify-between items-center px-6">
            <div>
              <Link to="/" className="text-2xl font-bold">Panto</Link>
            </div>
            {/* desktop menu */}
            <div>
                <ul className="hidden md:flex items-center space-x-5 gap-4">
                    {navber}
                </ul>
            </div>
            {/* cart icon */}
            <div className="hidden md:flex items-center cursor-pointer">
                <span className="relative"><FaCartShopping className="text-xl" /> <sup className="absolute -top-1 -right-3 text-xs bg-[#E58411] text-white rounded-full px-1">0</sup></span>

            </div>
            {/* mobile menu item */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-black opacity-80 space-y-6 flex flex-col justify-center items-center transition-transform transform ${isOpnen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
              <div onClick={toggleMenu} className="absolute top-4 right-4 text-xl cursor-pointer text-white"><FaTimes /></div>
              <div>
                 <ul onClick={toggleMenu} className="md:hidden flex flex-col gap-5 text-white">
                    {navber}
                </ul>
              </div>
            </div>
            {/* mobile menu toggle icon */}
            <div onClick={toggleMenu} className="block md:hidden cursor-pointer">
              {
                isOpnen ? null : <FaBarsStaggered className="text-xl" />
              }
                 
            </div>
        </nav>
    </header>
  )
}

export default Header