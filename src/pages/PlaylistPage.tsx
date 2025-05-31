import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PlayList from "../components/playList";



function PlaylistPage() {
    const navigate = useNavigate();
    const { gymId } = useParams<{ gymId: string }>();
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
                <PlayList id= {gymId}/>
            </div>
        </div>
    );

}


export default PlaylistPage;