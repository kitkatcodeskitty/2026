import { useState, useEffect } from "react";
import axios from "axios";

function Photo() {
  const [photo, setPhoto] = useState([]);

  const handler = async () => {
    const respondPhoto = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
    );

    setPhoto(respondPhoto.data);
  };

  useEffect(() => {
    handler();
  }, []);

  return (
    <div className="mx-6">
      <div className="flex gap-3 flex-wrap">
        {photo.splice(0, 5).map((items) => {
          return (
            <div
              key={items.id}
              className="w-full md:w-[48%] lg:w-[30%] p-4 border border-neutral-200 rounded shadow-sm hover:shadow-xl transition transition-all"
            >
              <h1 className="text-xl font-bold mb-2 hover:text-blue-500 ">
                {items.title}
              </h1>
              <p>{items.url}</p>
              <p>{items.thumbnailUrl}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photo;
