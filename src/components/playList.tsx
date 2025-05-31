import { useEffect, useState } from "react";

import { getPlayList } from "../services/votesServices";
import PopupVote from "./popupVote";
function PlayList({ id }: { id?: string }) {
  const [playList, setPlayList] = useState<any[]>([]);
  const [showPopup, setShowPopup] = useState(0);
  useEffect(() => {
    const fetchplaylist = async () => {
      const response = await getPlayList();
      const playlists = response.filter(
        (playlist) => playlist.gymId === Number(id)
      );
      setPlayList(playlists);
    };
    fetchplaylist();
  }, [id]);

  return (
    <div className="playlist">
      {playList.map((playlist, index) => (
        <div
          key={index}
          className="playlist-item bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 mb-3"
        >
          <h2 className="text-xl font-semibold text-amber-600">
            {playlist.name}
          </h2>
          <p className="text-gray-600">Votes: {playlist.votes}</p>
          <p className="text-gray-600">Gym ID: {playlist.gymId}</p>
          <button onClick={()=>{
            setShowPopup(playlist.id)
          }}>votar</button>
            {playlist.id == showPopup ? (
                <PopupVote
                    Close={() => setShowPopup(0)}
                    id={playlist.id}
                />
            ) :null}
        </div>

      ))}
    </div>
  );
}

export default PlayList;
