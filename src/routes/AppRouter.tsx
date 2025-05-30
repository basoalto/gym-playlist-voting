import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PlaylistPage from '../pages/PlaylistPage';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:gymId" element={<PlaylistPage />} />
        </Routes>
    );
}


export default AppRouter
