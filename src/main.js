

import AlbumList from './AlbumList';
import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Vinnie Moore');
const albumList = document.getElementById('album-list');

albums.then(console.log);
albums.then(data => console.log(data.albums.items));
albums.then(data => renderAlbums(data.albums.items, albumList));
