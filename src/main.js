

import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Vinnie Moore');
const album  = spotify.album.getAlbum('4jWODAwLL6Lf4hnthcc0D9');

const albumList   = document.getElementById('album-list');
const albumInfo   = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

albums.then(data => renderAlbums(data.albums.items, albumList));
album
  .then(data => renderAlbumInfo(data, albumInfo))
  .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
