export const getGyms = async ()=> {
    return [
        {
            id: 1,
            name: "Gym A",
            location: "Location A",
            rating: 4.5,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94mkBY2GENkMfUYwwigFXrmc5HS4sv4e_KQ&s"
        },
        {
            id: 2,
            name: "Gym B",
            location: "Location B",
            rating: 4.0,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUy7dJ6DDzfsdX6bMw7fHMbE673eMTpKC6Jg&s"
        },
        {
            id: 3,
            name: "Gym C",
            location: "Location C",
            rating: 4.8,
            imageUrl: "https://example.com/gym-c.jpg"
        }
    ]
}

export const getPlayList = async () => {
    return [
        // Gym A
        {
            id: 1,
            gymId: 1,
            name: "Beast Mode Beats",
            description: "Música para sacar al animal que llevas dentro.",
            imageUrl: "https://example.com/beast-mode.jpg"
        },
        {
            id: 2,
            gymId: 1,
            name: "Cardio con Flow",
            description: "Ritmos latinos para correr sin darte cuenta.",
            imageUrl: "https://example.com/cardio-flow.jpg"
        },

        // Gym B
        {
            id: 3,
            gymId: 2,
            name: "Muscle Melodies",
            description: "Clásicos del gym para motivar tus bíceps.",
            imageUrl: "https://example.com/muscle-melodies.jpg"
        },
        {
            id: 4,
            gymId: 2,
            name: "Reggaetón y Repeticiones",
            description: "Perreo intenso mientras levantas pesas.",
            imageUrl: "https://example.com/reggaeton-pesas.jpg"
        },

        // Gym C
        {
            id: 5,
            gymId: 3,
            name: "Zen y Zancadas",
            description: "Playlist chill para yoga o estiramiento.",
            imageUrl: "https://example.com/zen-zancadas.jpg"
        },
        {
            id: 6,
            gymId: 3,
            name: "HIIT Happens",
            description: "Explosiva como tu rutina de alta intensidad.",
            imageUrl: "https://example.com/hiit-happens.jpg"
        }
    ];
};

export const getVotes = async () => {
    return [
        { playlistId: 1,  dia: "Lunes", vote: 3 },
        { playlistId: 1,  dia: "Miércoles", vote: 2 },
        { playlistId: 2,  dia: "Viernes", vote: 5 },
        { playlistId: 3,  dia: "Domingo", vote: 4 }
    ];
};
