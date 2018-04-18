/* globals describe, it */
import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  it('should receive 0ms and convert to 0:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });

  it('should receive 1000ms and convert to 0:30', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });

  it('should receive 30000ms and convert to 0:30', () => {
    expect(convertToHumanTime(30000)).to.be.equal('0:30');
  });

  it('should receive 60000ms and convert to 1:00', () => {
    expect(convertToHumanTime(60000)).to.be.equal('1:00');
  });

  it('should receive 70000ms and convert to 1:10', () => {
    expect(convertToHumanTime(70000)).to.be.equal('1:10');
  });

  it('should receive 120000ms and convert to 2:00', () => {
    expect(convertToHumanTime(120000)).to.be.equal('2:00');
  });
});
