
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "DO 4 LOVE", artist:"Snoh Aalegra", genre:"Pop" },
    { title: "Something About Ya", artist:"J.Howell", genre:"R&B"},
    { title: "So into you", artist:"Tamia", genre:"R&B"},
    { title: "I will pray", artist:"Ebuka Songs", genre: "Gospel"},
    { title: "Nkalakatha", artist:"Mandoza", genre:"Kwaito"},
    { title: "Never would have made it", artist:"Marvin Sapp", genre:"Gospel"},
    { title: "Mdlwembe", artist:"Zola", genre:"Kwaito"},
    { title: "Ngithwale", artist:"Thulas and SG", genre: "Gospel"},
    // This array has 16 songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Groot": "Kwaito",
    "Drax": "Gospel",
    "Rocket": "R&B",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    for (let guardian in guardians) {
        let playlist = songs.filter(song => song.genre === guardians[guardian]).map(song => song.title);
        console.log(`${guardian}'s Playlist:`);
        console.log(playlist);
    }
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
