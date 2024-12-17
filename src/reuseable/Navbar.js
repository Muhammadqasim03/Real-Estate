import React from 'react'


const Navbar = () => {
  return (
   <div className='container    px-20'>

    <nav className="flex items-center justify-between bg-transparent  px-6 py-4">

    <div className="flex items-center">
      <img
        src="/Images/pngwing 1.png"
        alt="Real Estate Logo"
        className="h-8 w-8"
      />
      <span className="text-lg font-bold ml-2 text-white">Real Estate</span>
    </div>


    <ul className="flex space-x-14 text-white font-medium">
      <li className="hover:text-blue-500 cursor-pointer">Home</li>
      <li className="hover:text-blue-500 cursor-pointer">About</li>
      <li className="hover:text-blue-500 cursor-pointer">Property</li>
      <li className="hover:text-blue-500 cursor-pointer">Blog</li>
      <li className="hover:text-blue-500 cursor-pointer">Contact</li>
    </ul>

   
    <div className="flex items-center space-x-4">
      <button className="border border-white  text-white  px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
        Sign In
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-[#34E0A1] transition">
        Get Started
      </button>
    </div>
  </nav>
   </div>
  )
}

export default Navbar
