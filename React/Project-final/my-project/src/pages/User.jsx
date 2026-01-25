import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handler = async () => {

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      setUsers(response.data);

     
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="mx-7">
      <h2 className="text-2xl text-neutral-700 font-bold">Users</h2>
      <p className="text-neutral-500 mb-4">Browse all registered users</p>

      <div className="flex gap-3 flex-wrap justify-center my-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 bg-neutral-100 rounded-lg shadow-xl hover:shadow-lg transition w-80"
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-500">
              <b>Username: </b>
              @{user.username}
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
            <div className="w-full h-[1px] mt-5 bg-neutral-500 "></div>
            <button
              className="w-full border py-2 rounded-xl bg-[#FF7444] text-white font-bold mt-5 hover:bg-[#FF5A2E] hover:scale-105 transition-transform duration-200"
              onClick={() => navigate(`/user/${user.id}`)}
            >
              Visit Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
