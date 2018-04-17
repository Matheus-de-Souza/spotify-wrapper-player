

import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Vinnie Moore');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('4jWODAwLL6Lf4hnthcc0D9');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));
album.then(data => renderAlbumInfo(data, albumInfo));
