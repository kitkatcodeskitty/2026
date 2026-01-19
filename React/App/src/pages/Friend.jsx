import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from '../component/Card.jsx'
function Friend() {
  const [friend, isFriend] = useState(false);
  const message = friend ? "Add friend" : "Remove Friend";
  const alert = friend ? "" : "You are friend";

  const setFriend = () => {
    friend
      ? toast.success("Successfully added as friend")
      : toast.error("Remove as friend");
    isFriend(!friend);
  };




  return (
    <>
      <Toaster />
      <div className=" w-full gap-5 flex justify-center bg-zinc-100">
        <div className=" bg-amber-100 p-4">
          <div className="h-80 w-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop')]"></div>
          <h2 className="font-sans text-xl font-bold text-black">Jane Doe</h2>
          <p>{alert}</p>
          <button
            className="px-4 py-1 bg-white border"
            onClick={() => setFriend()}
          >
            {message}
          </button>
        </div>

        <div className=" bg-amber-100 p-4">
          <div className="h-80 w-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop')]"></div>
          <h2 className="font-sans text-xl font-bold">Jane Doe</h2>
          <p>{alert}</p>
          <button
            className="px-4 py-1 bg-white border"
            onClick={() => setFriend()}
          >
            {message}
          </button>
        </div>

        <div className=" bg-amber-100 p-4">
          <div className="h-80 w-72 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop')]"></div>
          <h2 className="font-sans text-xl font-bold">Jane Doe</h2>
          <p>{alert}</p>
          <button
            className="px-4 py-1 bg-white border"
            onClick={() => setFriend()}
          >
            {message}
          </button>
        </div>
      </div>

      <div class="">
        
      </div>

      <Card name="sara" />
    </>
  );
}

export default Friend;
