/* globals describe it */

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import spotify from '../src/Spotify';

chai.use(sinonChai);
chai.use(dirtyChai);

describe('Spotify', () => {
  it('should be an object', () => {
    expect(spotify).to.be.an('object');
  });
  it('should have method search', () => {
    expect(spotify.search).to.be.exist();
  });
  it('should have method album', () => {
    expect(spotify.album).to.be.exist();
  });
});
