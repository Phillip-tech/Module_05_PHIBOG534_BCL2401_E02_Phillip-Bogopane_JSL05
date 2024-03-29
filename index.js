
 // Define an array of songs with title, artist, genre propertiesand URL

const songs = [
   // List of songs with details
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop", url: "https://open.spotify.com/track/0d5lsd9Et0Pz1aonYcGBxH" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock", url: "https://open.spotify.com/track/5XfVm2T5f42G42o5uImlmr" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop", url: "https://open.spotify.com/track/5ITNBjRBVYaA5KYFru3uRB" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock", url: "https://open.spotify.com/track/3HtlVeVEtrJklA6zLrTzIo" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock", url: "https://open.spotify.com/track/4KWTAlx2RvbpseOGMEmROg" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop", url: "https://open.spotify.com/track/4zIYiFSQ2gpP0PjOyQOapS" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B", url: "https://open.spotify.com/track/4uUlSeZEl7kCN8lNPJkyKV" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B", url: "https://open.spotify.com/track/5GBuFQT6mhS9Gtq7vHspK0" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock", url: "https://open.spotify.com/track/1D3ODoXHBLpdxolZRHWV1j" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop", url: "https://open.spotify.com/track/7Cuk8jsPPoNYDg1GUJb5xj" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock", url: "https://open.spotify.com/track/4MsUsFfWseB9n7w9RW7b2i" }
 ];
 
 // Define guardians and their preferred genres

 const guardians = {
   // List of guardians and their preferred genres
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "R&B"
 };
 

// Function to generate playlists for each guardian based on their preferred genre
function generatePlaylist(guardians, songs) {
   const playlists = {};
   for (const guardian in guardians) {
       // Filter songs based on guardian's genre and convert them to HTML string
       playlists[guardian] = songs
           .filter(song => song.genre === guardians[guardian])
           .map(song => `<a class="song-title" href="${song.url}" target="_blank" aria-label="Listen to ${song.title} by ${song.artist}">${song.title}</a> by ${song.artist}`);
   }
   return playlists;
}

// Generate playlists based on guardians' preferences and songs
const playlists = generatePlaylist(guardians, songs);
const playlistsContainer = document.getElementById("playlists");

// Iterate over each guardian's playlist and create HTML elements for display
for (const guardian in playlists) {
   const playlist = playlists[guardian];
   const playlistDiv = document.createElement("div");
   playlistDiv.classList.add("playlist");

   // Create a heading for the guardian's playlist
   const guardianHeading = document.createElement("h3");
   guardianHeading.textContent = `${guardian}'s Playlist`;

   // Create a list for songs
   const songList = document.createElement("ul");

   // Add each song to the list
   playlist.forEach(song => {
       const songItem = document.createElement("li");
       songItem.innerHTML = song;
       songList.appendChild(songItem);
   });

   // Append heading and song list to the playlist container
   playlistDiv.appendChild(guardianHeading);
   playlistDiv.appendChild(songList);
   playlistsContainer.appendChild(playlistDiv);
}
