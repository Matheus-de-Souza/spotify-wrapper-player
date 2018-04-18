/* globals describe it */

import 'jsdom-global/register';

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

chai.use(sinonChai);
chai.use(dirtyChai);

describe('AlbumTracks', () => {
  const data = [{
    id: '7bv5XVZTBEidyTuCrxak0l',
    name: 'In Control',
    preview_url: 'https://p.scdn.co/mp3-preview/d45f58108a7d0e4e93ef3f5fcedd551ff77384fd?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:7bv5XVZTBEidyTuCrxak0l',
    duration_ms: 278480,
  }];
  const data2 = [{
    id: '7bv5XVZTBEidyTuCrxak0l',
    name: 'In Control',
    preview_url: 'https://p.scdn.co/mp3-preview/d45f58108a7d0e4e93ef3f5fcedd551ff77384fd?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:7bv5XVZTBEidyTuCrxak0l',
    duration_ms: 278480,
  }, {
    id: '4dVnJDSyBBElsGfzH2tEUr',
    name: 'Daydream',
    preview_url: 'https://p.scdn.co/mp3-preview/f9f259f5db6e8e9facac255e0010492508f5ca0b?cid=774b29d4f13844c495f206cafdad9c86',
    track_number: 2,
    type: 'track',
    uri: 'spotify:track:4dVnJDSyBBElsGfzH2tEUr',
    duration_ms: 270973,
  }];

  const markup = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/d45f58108a7d0e4e93ef3f5fcedd551ff77384fd?cid=774b29d4f13844c495f206cafdad9c86">
    <p class="music-number">1</p>
    <p class="music-title">In Control</p>
    <p class="music-duration">${convertToHumanTime(278480)}</p>
  </div>`;

  const markup2 = `
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/d45f58108a7d0e4e93ef3f5fcedd551ff77384fd?cid=774b29d4f13844c495f206cafdad9c86">
    <p class="music-number">1</p>
    <p class="music-title">In Control</p>
    <p class="music-duration">${convertToHumanTime(278480)}</p>
  </div>
  <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/f9f259f5db6e8e9facac255e0010492508f5ca0b?cid=774b29d4f13844c495f206cafdad9c86">
    <p class="music-number">2</p>
    <p class="music-title">Daydream</p>
    <p class="music-duration">${convertToHumanTime(270973)}</p>
  </div>`;
  // <p class="music-duration">3:54</p>

  it('should exist', () => {
    expect(renderAlbumTracks).to.exist();
  });

  it('should create and append given the correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 track', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
