// src/context/VoteContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface DayVotes {
  day: string;
  voted: boolean;
}

interface VoteEntry {
  playlistId: number;
  days: DayVotes[];
}

interface VoteContextType {
  votes: VoteEntry[];
  addVote: (playlistId: number, day: string) => void;
  hasVoted: (playlistId: number, day: string) => boolean;
}

const VoteContext = createContext<VoteContextType | undefined>(undefined);

export const VoteProvider = ({ children }: { children: ReactNode }) => {
  const [votes, setVotes] = useState<VoteEntry[]>([]);

  const hasVoted = (playlistId: number, day: string): boolean => {
    const playlistVotes = votes.find((entry) => entry.playlistId === playlistId);
    return !!playlistVotes?.days.find((d) => d.day === day && d.voted);
  };

  const addVote = (playlistId: number, day: string) => {
    if (hasVoted(playlistId, day)) return;
    setVotes((prevVotes) => {
      // Playlist no existe aún, crear nueva entrada
      return [...prevVotes, { playlistId, days: [{ day, voted: true }] }];
    });
  };

  return (
    <VoteContext.Provider value={{ votes, addVote, hasVoted }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context)
    throw new Error("useVoteContext must be used within VoteProvider");
  return context;
};

export default VoteContext;
