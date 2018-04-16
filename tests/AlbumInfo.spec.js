/* globals describe it */

import 'jsdom-global/register';

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import renderAlbumInfo from '../src/AlbumInfo';

chai.use(sinonChai);
chai.use(dirtyChai);

describe('AlbumInfo', () => {

  const data = {
    album_type: 'album',
    artists: [
      {
        // external_urls: [Object],
        href: 'https://api.spotify.com/v1/artists/2plmfvGgldxCpZF0vLt3o4',
        id: '2plmfvGgldxCpZF0vLt3o4',
        name: 'Vinnie Moore',
        type: 'artist',
        uri: 'spotify:artist:2plmfvGgldxCpZF0vLt3o4'
      }
    ],
    available_markets: [
      'AD',
      'AR',
      'AT',
      'AU',
      'BE',
      'BG',
      'BO',
      'BR',
      'CA',
      'CH',
      'CL',
      'CO',
      'CR',
      'CY',
      'CZ',
      'DE',
      'DK',
      'DO',
      'EC',
      'EE',
      'ES',
      'FI',
      'FR',
      'GB',
      'GR',
      'GT',
      'HK',
      'HN',
      'HU',
      'ID',
      'IE',
      'IL',
      'IS',
      'IT',
      'JP',
      'LI',
      'LT',
      'LU',
      'LV',
      'MC',
      'MT',
      'MX',
      'MY',
      'NI',
      'NL',
      'NO',
      'NZ',
      'PA',
      'PE',
      'PH',
      'PL',
      'PT',
      'PY',
      'RO',
      'SE',
      'SG',
      'SK',
      'SV',
      'TH',
      'TR',
      'TW',
      'US',
      'UY',
      'VN',
      'ZA'
    ],
    external_urls:
    {
      spotify: 'https://open.spotify.com/album/4jWODAwLL6Lf4hnthcc0D9'
    },
    href: 'https://api.spotify.com/v1/albums/4jWODAwLL6Lf4hnthcc0D9',
    id: '4jWODAwLL6Lf4hnthcc0D9',
    images: [
      { height: 640,
        url: 'https://i.scdn.co/image/3539724c31e284e952f8a7cadd368fa98d936dc4',
        width: 640 },
      { height: 300,
        url: 'https://i.scdn.co/image/e6879de1cbd59ed6b17a8f6640ce88e4141f5111',
        width: 300 },
      { height: 64,
        url: 'https://i.scdn.co/image/50f626d9a83d5d0eb74fe7ef7c06f637d5989e3f',
        width: 64 }
    ],
    name: 'Vinnie Moore Collection: The Shrapnel Years',
    release_date: '2006-03-14',
    release_date_precision: 'day',
    type: 'album',
    uri: 'spotify:album:4jWODAwLL6Lf4hnthcc0D9',
    tracks: {
      total: 13,
    },
  };

  const markup = `
    <div class="album-info">
      <img class="album-image" src="https://i.scdn.co/image/3539724c31e284e952f8a7cadd368fa98d936dc4" alt="Vinnie Moore Collection: The Shrapnel Years">
      <p class="album-title">Vinnie Moore Collection: The Shrapnel Years</p>
      <p class="album-artist">Vinnie Moore</p>
      <p class="album-counter">13 Músicas</p>
    </div>`;

  it('should exist', () => {
    expect(renderAlbumInfo).to.exist();
  });

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

});
