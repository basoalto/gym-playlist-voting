import { useParams } from "react-router-dom";
import { getPlayList } from "../services/votesServices";
import { useEffect, useState } from "react";
import  PopupVote from "./popupVote";

type Playlist = {
  id: number;
  name: string;
  description: string;
  gymId: number;
};

function Playlist() {
  const [playList, setPlaylist] = useState<Playlist[]>([]);
  const [isOpen, setIsOpen] = useState<number>(0);

  const idParams = useParams<{ gymId: string }>();
  useEffect(() => {
    console.log("idParams", idParams);
    const fetchGyms = async () => {
      try {
        const playList = await getPlayList();
        const parseGymId = playList.filter((item) => {
          return item.id == Number(idParams.gymId);
        });
        setPlaylist(parseGymId);
      } catch (error) {
        console.error("Error fetching gyms:", error);
      }
    };
    fetchGyms();
  }, [idParams]);

  return (
    <div className="space-y-8">
      {playList.map((playlist: Playlist) => (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start mt-3 hover:scale-105 transition-transform duration-200" key={playlist.id}>
          <h2 className="text-2xl font-bold text-amber-700 mb-2">{playlist.name}</h2>
          <p className="text-gray-600 mb-4">{playlist.description}</p>
          <button
            onClick={() => {
              setIsOpen(playlist.id);
            }}
            className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow"
          >
            Votar
          </button>

          {isOpen === playlist.id && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
              <PopupVote onClose={() => setIsOpen(0)} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Playlist;
