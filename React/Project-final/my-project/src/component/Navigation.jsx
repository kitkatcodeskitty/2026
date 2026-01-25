import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // Hamburger icons

function Navigation() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#576A8F] rounded-4xl m-5 p-5 flex items-center justify-between h-20">

      <a href="/" className="text-[#FFF8DE] text-2xl font-bold">
        MockMate
      </a>


      <div className="hidden md:flex space-x-6 text-[#FFF8DE] text-lg">
        <a href="/user">User</a>
        <a href="/photo">Photo</a>
        <a href="/post">Post</a>
        <a href="/albums">Albums</a>
      </div>


      <div className="md:hidden text-[#FFF8DE] text-2xl cursor-pointer" onClick={() => setToggle(!toggle)}>
        {toggle ? <RiCloseLine /> : <RiMenu3Line />}
      </div>


      {toggle && (
        <div className="absolute top-20 left-0  w-full bg-[#576A8F] flex flex-col items-center py-4 space-y-4 md:hidden z-10">
          <a href="/user" className="text-[#FFF8DE] text-lg" onClick={() => setToggle(false)}>User</a>
          <a href="/photo" className="text-[#FFF8DE] text-lg" onClick={() => setToggle(false)}>Photo</a>
          <a href="/post" className="text-[#FFF8DE] text-lg" onClick={() => setToggle(false)}>Post</a>
          <a href="/albums" className="text-[#FFF8DE] text-lg" onClick={() => setToggle(false)}>Albums</a>
        </div>
      )}
    </div>
  );
}

export default Navigation;
