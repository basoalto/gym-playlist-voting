import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {getGyms} from "../services/votesServices";

type Gym = {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
};
function GymList() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchGyms = async () => {
      try {
        const gyms = await getGyms();
        setGyms(gyms);
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };
    fetchGyms();
  }, []);

  const goToPlaylist = (gymId: number) => {
    navigate(`/playlist/${gymId}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {gyms.map((gym) => (
        <div key={gym.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition-transform duration-200">
          <img src={gym.imageUrl} alt={gym.name} className="w-full h-40 object-cover rounded-lg mb-4 border border-amber-200" />
          <h3 className="text-xl font-semibold text-amber-700 mb-2">{gym.name}</h3>
          <p className="text-gray-600 mb-2">Ubicación: <span className="font-medium">{gym.location}</span></p>
          <button
            onClick={() => {
              goToPlaylist(gym.id);
            }}
            className="mt-2 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow"
          >
            Ver Playlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default GymList;
