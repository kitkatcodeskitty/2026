import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaFolder } from "react-icons/fa";
import axios from "axios";

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);
  const [albums,setAlbums] = useState([]);

  const handler = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,

    );
    console.log(response)
    setUser(response.data);

    const postResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${response.data.id}`,
    );
    setPosts(postResponse.data);
    console.log(postResponse.data)

    const albumResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${response.data.id}`
    );
    setAlbums(albumResponse.data);
    console.log(albumResponse.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="mx-6 bg-neutral-50">
      <div className="h-20 w-full bg-gradient-to-r from-[#576A8F] to-[#FF7444] rounded-lg"></div>
      <div className="shadow-xl"></div>

      <div className="border border-neutral-200 my-5 p-5 flex gap-4 flex-wrap">
        <div>
          <div className="h-32 w-32 bg-center bg-contain rounded-full bg-[url('https://i.pinimg.com/736x/2f/94/92/2f9492c780975bb745d8ecb03c4d4f53.jpg')]"></div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <h2 className="text-neutral-500 text-sm">@{user.username}</h2>

          <div className="flex flex-col md:flex-row md:gap-8 mt-4">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-neutral-600">
                <MdEmail />
                <p>{user.email}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <CiGlobe />
                <a href={`https://${user.website}`} className="text-blue-600">
                  {user.website}
                </a>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <GoOrganization />
                <p>{user.company?.name}</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-neutral-600">
                <FaPhoneAlt />
                <p>{user.phone}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-600">
                <CiLocationOn />
                <p>
                  {user.address?.city}, {user.address?.street}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-neutral-700 text-xl font-bold my-4">Recent Posts</h2>
      <div className="flex flex-wrap gap-4 ">
        {posts.slice(0, 3).map((post) => (
          <div
            key={post.id}
            className="border border-neutral-200 bg-blue-50 p-3 rounded shadow flex-1 min-w-[250px] hover:shadow-2xl transition-all"
          >
            <h3 className="font-bold text-blue-500">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <h2 className="text-neutral-700 text-xl font-bold my-4">Albums</h2>
      <div className="flex flex-wrap gap-4">
        {albums.slice(0,6).map((albums)=>{
          return(
          <div key={albums.id} className="border border-neutral-200 bg-neutral-100 p-3  rounded shadow flex-1 flex items-center gap-4 min-w-[250px] hover:shadow-2xl transition-all"
          >
            
            <FaFolder size={32} className=" p-1 rounded bg-neutral-200 " />
            <h1 className="text-blue-500 font-bold"> {albums.title}</h1>
            </div>
        )})}
      </div>
    </div>
  );
}

export default Profile;
