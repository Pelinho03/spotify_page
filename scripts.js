document.addEventListener("DOMContentLoaded", () => {
    const artistsData = [
        { name: "Artista 1", image: "./assets/artista_1.png" },
        { name: "Artista 2", image: "./assets/artista_2.png" },
        { name: "Artista 3", image: "./assets/artista_3.png" },
        { name: "Artista 4", image: "./assets/artista_4.png" },
        { name: "Artista 5", image: "./assets/artista_5.png" },
        { name: "Artista 6", image: "./assets/artista_6.png" },
    ];

    const albumsData = [
        { name: "Album 1", artist: "test 1", image: "./assets/album_1.png" },
        { name: "Album 2", artist: "test 2", image: "./assets/album_2.png" },
        { name: "Album 3", artist: "test 3", image: "./assets/album_3.png" },
        { name: "Album 4", artist: "test 4", image: "./assets/album_4.png" },
        { name: "Album 5", artist: "test 5", image: "./assets/album_5.png" },
        { name: "Album 6", artist: "test 6", image: "./assets/album_6.png" },
    ];

    const artistGrid = document.querySelector(".artists-grid");
    const albumsGrid = document.querySelector(".albuns-grid");

    artistsData.forEach((artist) => {
        const artistCard = document.createElement("div");
        artistCard.classList.add("artist-card");

        artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <h3>${artist.name}</h3>
        <p>Artista</p>
        `;

        artistGrid.appendChild(artistCard);
    });

    albumsData.forEach((album) => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");

        albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do ${album.name}">
        <p>${album.name}</p>
        `;
        albumsGrid.appendChild(albumCard);
    });
});
