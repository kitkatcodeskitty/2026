import { CiUser } from "react-icons/ci";
import { BsPostcardHeartFill } from "react-icons/bs";
import { IoIosAlbums } from "react-icons/io";
import { IoMdPhotos } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [user, setUser] = useState([]);
  const [post, setPost] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photo, setPhoto] = useState([]);

  const handler = async () => {
    const respondUser = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    const respondPost = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    const respondAlbums = await axios.get(
      "https://jsonplaceholder.typicode.com/albums",
    );
    const respondPhoto = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );

    setUser(respondUser.data);
    setAlbums(respondAlbums.data);
    setPost(respondPost.data);
    setPhoto(respondPhoto.data);
  };
  console.log("Count: ", user.length);
  console.log("Post", post.length);
  console.log("albums", albums.length);
  console.log("photo", photo.length);

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="mx-6 mt-6">


      {/* user */}
      <div>
      <p className="font-bold text-xl mb-4">Dashboard</p>
  
      <h2 className="text-2xl font-bold text-center">User</h2>
      <p className="text-center">There are {user.length} users </p>
      <div className="flex gap-4  p-5">
        {user.splice(0, 5).map((user) => (
          <div
            key={user.id}
            className="p-4 bg-neutral-100 rounded-lg shadow-xl hover:shadow-lg transition w-80"
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">
              <b>Username: </b>@{user.username}
            </p>
            <p className="text-sm text-gray-500">
              <b>E-mail: </b>
              {user.email}
            </p>
            <p className="text-sm text-gray-500">
              <b>Phone: </b>
              {user.phone}
            </p>
            <p className="text-sm text-gray-500">
              <b>Website: </b>
              {user.website}
            </p>
          </div>
        ))}
      </div>
      </div>





      <div className="flex justify-center py-5 ">
        <button className="bg-blue-500 px-5 py-2">
          <a href="/post" className="text-xl text-white hover:text-gray-200">
            View All Posts
          </a>
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="flex justify-between items-center rounded-xl bg-[#F7B7B7] text-black p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Posts</p>
            <p className="text-2xl font-bold">{post.length}</p>
            <a href="/post" className="text-sm underline hover:text-gray-200">
              View All Posts
            </a>
          </div>
          <BsPostcardHeartFill size={40} />
        </div>

        <div className="flex justify-between items-center rounded-xl bg-[#B7F7D4] text-[#333] p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Albums</p>
            <p className="text-2xl font-bold">{albums.length}</p>
            <a
              href="/albums"
              className="text-sm underline hover:text-green-700"
            >
              View All Albums
            </a>
          </div>
          <IoIosAlbums size={40} />
        </div>

        <div className="flex justify-between items-center rounded-xl bg-[#F7E3B7] text-[#333] p-5 w-full sm:w-full md:w-60 h-36">
          <div>
            <p className="text-xl font-semibold">Photos</p>
            <p className="text-2xl font-bold">{photo.length}</p>
            <a
              href="/photo"
              className="text-sm underline hover:text-orange-700"
            >
              View All Photos
            </a>
          </div>
          <IoMdPhotos size={40} />
        </div>
      </div>
    </div>
  );
}

export default Home;
