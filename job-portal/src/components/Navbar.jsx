import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {path:"/", title:"start a search"},
    {path:"/my-job", title:"My Jobs"},
    {path:"/salary", title:"Salary Estimate"},
    {path:"/post-job", title:"Post Job"},
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className="flex justify-between items-center py-6">


        {/* Container for image and text */}
        <div className="flex items-center space-x-2">
           <img src="../public/images/Trainline.png" className="w-[50px]" />
           <span className="text-black ml-1 flex items-center">Job-Portal</span>
        </div>

        {/* nav items for large devices */}
        <ul className='hidden md:flex gap-12'>
           {navItems.map(({path, title}) => (
              <li key={path} className="text-base text-primary">
                    <NavLink
                    to={path}
                    className={({ isActive }) =>  isActive ? "active" : ""}   
                  >
                    {title}
                  </NavLink>
              </li>
            ))}
        </ul>

        {/* signup and login btn */}
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
         <a href="/login" className='py-2 px-5 border rounded'>Log in</a>
         <a href="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</a>
        </div>

        {/*mobile menu */}
        <div className="md:hidden block">              {/* md-- means medium*/}
         <button onClick={handleMenuToggler}>
          {
              isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>     
          }
          
          </button>
        </div>
      </nav>

      {/* navitems for mobile   */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
        {navItems.map(({path, title}) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                    <NavLink
                    to={path}
                    className={({ isActive }) =>  isActive ? "active" : ""}   
                  >
                    {title}
                  </NavLink>
              </li>
            ))}

            <li className='text-white py-1'><a href="/login" >Log in</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar