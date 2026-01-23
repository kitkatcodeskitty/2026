import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function Head() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-6 py-4 flex items-center justify-between w-full bg-white shadow-md">
      
      {/* Logo */}
      <a href="/" className="font-bold text-2xl md:text-4xl">
        API Showcase
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-lg">
        <a href="/user" className="hover:text-blue-500">User</a>
        <a href="/albums" className="hover:text-blue-500">Albums</a>
        <a href="/photo" className="hover:text-blue-500">Photo</a>
        <a href="/post" className="hover:text-blue-500">Post</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        <RiBarChartHorizontalLine />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col px-8 gap-4 py-6 md:hidden">
          <a href="/user" onClick={() => setOpen(false)}>User</a>
          <a href="/albums" onClick={() => setOpen(false)}>Albums</a>
          <a href="/photo" onClick={() => setOpen(false)}>Photo</a>
          <a href="/post" onClick={() => setOpen(false)}>Post</a>
        </div>
      )}
    </header>
  );
}

export default Head;
