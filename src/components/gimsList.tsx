import { getGyms } from "../services/votesServices";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
type Gym = {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
};

function GimsList() {
  const navigator = useNavigate();
  const [gims, setGims] = useState<Gym[]>([]);
  useEffect(() => {
    const fetchGyms = async () => {
      const response = await getGyms();
      setGims(response);
    };
    fetchGyms();
  }, []);

  return (
    <>
      {gims.map((gym, index) => (
        <li
          key={index}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 mb-3"
        >
          <h2 className="text-xl font-semibold text-amber-600">{gym.name}</h2>
          <p className="text-gray-600">{gym.location}</p>
          <p className="text-yellow-500">Rating: {gym.rating}</p>
          <img
            src={gym.imageUrl}
            alt={gym.name}
            className="w-full h-48 object-cover rounded mt-2"
          />
        <button onClick={() => navigator(`/playlist/${gym.id}`)} className="mt-4 bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition-colors duration-200">
            Ver Playlist
        </button>
        </li>

      ))}
    </>
  );
}
export default GimsList;
