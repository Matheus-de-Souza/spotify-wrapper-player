/* globals describe it */

import 'jsdom-global/register';

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import renderAlbums from '../src/AlbumList';

chai.use(sinonChai);
chai.use(dirtyChai);

describe('AlbumList', () => {
  it('should exist', () => {
    expect(renderAlbums).to.exist();
  });

  const data = [
    {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2plmfvGgldxCpZF0vLt3o4"
          },
          "href": "https://api.spotify.com/v1/artists/2plmfvGgldxCpZF0vLt3o4",
          "id": "2plmfvGgldxCpZF0vLt3o4",
          "name": "Vinnie Moore",
          "type": "artist",
          "uri": "spotify:artist:2plmfvGgldxCpZF0vLt3o4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5PC4gp98bK7pCofmu84tXk"
      },
      "href": "https://api.spotify.com/v1/albums/5PC4gp98bK7pCofmu84tXk",
      "id": "5PC4gp98bK7pCofmu84tXk",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/7f63472b4a25756410f6ad74b65d10d3ef89837a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/09f917f79af149d67d188191939ba3748fa4c724",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/4bfe5f1f5464be9fa2076f015ee3f0b45f6a5248",
          "width": 64
        }
      ],
      "name": "Vinnie Moore (Live)",
      "release_date": "2000-02-01",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:5PC4gp98bK7pCofmu84tXk"
    }
  ];

  const data2 = [
    {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2plmfvGgldxCpZF0vLt3o4"
          },
          "href": "https://api.spotify.com/v1/artists/2plmfvGgldxCpZF0vLt3o4",
          "id": "2plmfvGgldxCpZF0vLt3o4",
          "name": "Vinnie Moore",
          "type": "artist",
          "uri": "spotify:artist:2plmfvGgldxCpZF0vLt3o4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/5PC4gp98bK7pCofmu84tXk"
      },
      "href": "https://api.spotify.com/v1/albums/5PC4gp98bK7pCofmu84tXk",
      "id": "5PC4gp98bK7pCofmu84tXk",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/7f63472b4a25756410f6ad74b65d10d3ef89837a",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/09f917f79af149d67d188191939ba3748fa4c724",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/4bfe5f1f5464be9fa2076f015ee3f0b45f6a5248",
          "width": 64
        }
      ],
      "name": "Vinnie Moore (Live)",
      "release_date": "2000-02-01",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:5PC4gp98bK7pCofmu84tXk"
    },
    {
      "album_type": "album",
      "artists": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/2plmfvGgldxCpZF0vLt3o4"
          },
          "href": "https://api.spotify.com/v1/artists/2plmfvGgldxCpZF0vLt3o4",
          "id": "2plmfvGgldxCpZF0vLt3o4",
          "name": "Vinnie Moore",
          "type": "artist",
          "uri": "spotify:artist:2plmfvGgldxCpZF0vLt3o4"
        }
      ],
      "external_urls": {
        "spotify": "https://open.spotify.com/album/4jWODAwLL6Lf4hnthcc0D9"
      },
      "href": "https://api.spotify.com/v1/albums/4jWODAwLL6Lf4hnthcc0D9",
      "id": "4jWODAwLL6Lf4hnthcc0D9",
      "images": [
        {
          "height": 640,
          "url": "https://i.scdn.co/image/3539724c31e284e952f8a7cadd368fa98d936dc4",
          "width": 640
        },
        {
          "height": 300,
          "url": "https://i.scdn.co/image/e6879de1cbd59ed6b17a8f6640ce88e4141f5111",
          "width": 300
        },
        {
          "height": 64,
          "url": "https://i.scdn.co/image/50f626d9a83d5d0eb74fe7ef7c06f637d5989e3f",
          "width": 64
        }
      ],
      "name": "Vinnie Moore Collection: The Shrapnel Years",
      "release_date": "2006-03-14",
      "release_date_precision": "day",
      "type": "album",
      "uri": "spotify:album:4jWODAwLL6Lf4hnthcc0D9"
    }
  ];

  const markup = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
        <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
      </div>
    </div>`;

  const markup2 = `
    <div class="list-item" data-album-id="${data2[0].id}">
      <img src="${data2[0].images[2].url}" alt="${data2[0].name}" class="list-image" data-album-id="${data2[0].id}">
      <div class="list-description" data-album-id="${data2[0].id}">
        <p class="list-title" data-album-id="${data2[0].id}">${data2[0].name}</p>
        <p class="list-subtitle" data-album-id="${data2[0].id}">${data2[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item" data-album-id="${data2[1].id}">
      <img src="${data2[1].images[2].url}" alt="${data2[1].name}" class="list-image" data-album-id="${data2[1].id}">
      <div class="list-description" data-album-id="${data2[1].id}">
        <p class="list-title" data-album-id="${data2[1].id}">${data2[1].name}</p>
        <p class="list-subtitle" data-album-id="${data2[1].id}">${data2[1].artists[0].name}</p>
      </div>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 album', () => {
    const element2 = document.createElement('div');
    renderAlbums(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });

});
