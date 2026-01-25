import { IoIosSend } from "react-icons/io";
import { PiLineVertical } from "react-icons/pi";
function footer() {
  return (
    <>
      <div className=" w-full bg-[#576A8F] mt-8 p-5 text-[#FFF8DE]">
        <div>
          <h1 className="text-2xl font-bold my-2">MockMate</h1>
        </div>
        <div className="h-1 bg-white rounded-xl my-2"></div>
        <div className="flex flex-wrap">
          <div className="flex-1">
            <div className="flex items-center">
              <input
                placeholde="Enter your E-mail"
                type="email"
                className="border px-5 py-2 w-[80%] "
              ></input>
              <IoIosSend size={30} className="inline border m-2" />
            </div>
            <p>
              Subscribe our newsletter by sending your email to get news about
              us.
            </p>
          </div>

          <div className=" flex space-x-2">
            <div className="flex flex-col gap-2 flex-1" >
                <h2>Navigation</h2>
                <a href="/user">User</a>
                <a href="/photo">Photo</a>
                <a href="/albums">Albums</a>
                <a href="/post">Post</a>
            </div>

            <div className=" flex-1">
                <h2 className="mb-2">Resources</h2>
                <p>Jsonplaceholder</p>
            </div>

            <div className='flex-1'>
                <h2 className="mb-2">About</h2>
                <p>Built with React, TypeScript, and Tailwind CSS. Data provided by JSONPlaceholder.</p>
            </div>
          </div>
          
        </div>
        <div className="h-1 bg-white rounded-xl my-2"></div>
        <div className="flex">
            <div className="flex"> <p>Made with ♡ </p> <PiLineVertical /> <p>By teams</p></div>
            <div className="flex-1 flex items-center justify-end">
                <p>Reserved</p>
                <PiLineVertical />
                <p>Policy</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default footer;
