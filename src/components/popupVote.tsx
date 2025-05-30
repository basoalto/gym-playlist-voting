import { useState, useEffect } from "react";
import { getVotes } from "../services/votesServices";
import { useVoteContext } from "../context/contextVote";

type Vote = {
  id: number;
  playlistId: number;
  dia: string;
  vote: number;
};

function PopupVote({ onClose }: { onClose: () => void }) {
  const [vote, setVote] = useState<Vote[]>([]);
  const { hasVoted, addVote } = useVoteContext();
  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const votes = await getVotes();
        setVote(votes);
      } catch (error) {
        console.error("Error fetching votes:", error);
      }
    };
    fetchVotes();
  }, []);
  const handleVote = (item: Vote) => {
    console.log(vote);
    if (!hasVoted(item.id, item.dia)) {
setVote((prev) => {
  console.log("Votos anteriores:", prev);

  return prev.map((vote) => {
    console.log("Procesando voto:", vote);

    if (item.id === vote.id) {
      console.log(`Actualizando voto para id ${item.id}`);
      return { ...vote, vote: vote.vote + 1 };
    }

    return vote;
  });
});


      addVote(item.id, item.dia);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative border-2 border-amber-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-amber-500 hover:text-amber-700 font-bold focus:outline-none"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">
          Votación
        </h2>
        <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
          {vote.length === 0 ? (
            <p className="text-center text-gray-400">
              No hay votos disponibles.
            </p>
          ) : (
            vote.map((item: Vote) => (
              <div
                key={item.id}
                className="vote-item border-b pb-4 mb-4 last:border-b-0 last:mb-0"
              >
                <h3 className="text-lg font-semibold text-amber-600">
                  Playlist ID: {item.playlistId}
                </h3>
                <p className="text-gray-600">
                  Día: <span className="font-medium">{item.dia}</span>
                </p>
                <p className="text-gray-600 mb-2">
                  Voto: <span className="font-medium">{item.vote}</span>
                </p>
                <button
                  onClick={() => handleVote(item)}
                  disabled={hasVoted(item.id, item.dia)}
                  className="px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {hasVoted(item.id, item.dia) ? "Ya votaste" : "Votar"}
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PopupVote;
