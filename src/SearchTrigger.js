import spotify from './Spotify';
import renderAlbums from './AlbumList';

const searchInput = document.getElementById('search-input');
const albumList   = document.getElementById('album-list');
const searchForm = document.getElementById('search-form');

function makeRequest(query) {
  spotify.search.albums(query)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar request na página
    makeRequest(searchInput.value);
  });
}
