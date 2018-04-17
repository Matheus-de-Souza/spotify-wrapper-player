function createMarkup(album) {
  return `
    <div class="album-info">
      <img class="album-image" src="${album.images[0].url}" alt="${album.name}">
      <p class="album-title">${album.name}</p>
      <p class="album-artist">${album.artists[0].name}</p>
      <p class="album-counter">${album.tracks.total} Músicas</p>
    </div>`;
}

export default function renderAlbumInfo(data, element) {
  const markup = createMarkup(data);

  element.innerHTML = markup;
}
