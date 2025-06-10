document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
        { name: "Slow J", image: "./assets/artista_1.png" },
        { name: "Van Zee", image: "./assets/artista_2.png" },
        { name: "Plutonio", image: "./assets/artista_3.png" },
        { name: "Piruka", image: "./assets/artista_4.png" },
        { name: "Mishlawi", image: "./assets/artista_5.png" },
        { name: "Julinho Ksd", image: "./assets/artista_6.png" },
    ];

    const albumsData = [
        { name: "Afro Fado", artist: "Slow J", image: "./assets/album_1.png" },
        {
            name: "You Are Forgiven",
            artist: "Slow J",
            image: "./assets/album_2.png",
        },
        {
            name: "The Art of Slowing Down",
            artist: "Slow J",
            image: "./assets/album_3.png",
        },
        { name: "do.mar", artist: "Van Zee", image: "./assets/album_4.png" },
        { name: "O Próprio", artist: "Dillaz", image: "./assets/album_5.png" },
        { name: "AClara", artist: "Piruka", image: "./assets/album_6.png" },
    ];

    const artistGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albuns-grid");

    artistsData.forEach((artist) => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("artist-card");

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <div>
            <h3>${artist.name}</h3>
            <p>Artista</p>
        </div>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach((album) => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");

        albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do ${album.name}">
        <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        </div>
        `;
        albumsGrid.appendChild(albumCard);
    });
});
