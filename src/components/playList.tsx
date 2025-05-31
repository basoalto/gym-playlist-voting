
import { useEffect, useState } from 'react';

import { getPlayList } from '../services/votesServices';

function PlayList({id}: {id?: string}) {

    const [playList, setPlayList] = useState<any[]>([]);
    useEffect(() => {
        const fetchplaylist = async () => {
            const response = await getPlayList();
            const playlists = response.filter((playlist) => playlist.gymId === Number(id));
            setPlayList(playlists);
        };
        fetchplaylist()
    }, [id]);

  return (
    <div className="playlist">
        {playList.map((playlist, index) => (
            <div key={index} className="playlist-item bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 mb-3">
                <h2 className="text-xl font-semibold text-amber-600">{playlist.name}</h2>
                <p className="text-gray-600">Votes: {playlist.votes}</p>
                <p className="text-gray-600">Gym ID: {playlist.gymId}</p>
            </div>
        ))}
    </div>
  );
}



export default PlayList;