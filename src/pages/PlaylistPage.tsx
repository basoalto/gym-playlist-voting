import Playlist from "../components/playList";
import { useNavigate } from "react-router-dom";


function PlaylistPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-300">
            <h1 className="text-4xl font-bold mb-8 text-amber-700 drop-shadow-lg">Playlist Page</h1>
            <button
                className="mb-6 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow self-start"
                onClick={() => navigate("/")}
            >
                ← Volver al listado de gimnasios
            </button>
            <div className="w-full max-w-2xl">
                <Playlist/>
            </div>
        </div>
    );

}


export default PlaylistPage;