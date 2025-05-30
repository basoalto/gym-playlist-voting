import { useState } from "react";
import GymList from "../components/gymlist";
import GymContactForm from "../components/GymContactForm";

function Home() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-100 to-amber-300">
            <h1 className="text-4xl font-bold mb-8 text-amber-700 drop-shadow-lg">Lista de Gimnasios</h1>
            <button
                className="mb-8 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow"
                onClick={() => setShowForm(true)}
            >
                ¿Eres un gimnasio? Deja tus datos de contacto
            </button>
            <div className="w-full max-w-2xl">
                <GymList/>
            </div>
            {showForm && <GymContactForm onClose={() => setShowForm(false)} />}
        </div>
    );
}

export default Home;