// Write your tests here!

const { expect } = require('chai');
const { polybius } = require('../src/polybius')

describe('polybius', () => {
    it('should encode the input correctly', () => {
        const actual1 = polybius('thinkful')
        const expected1 = '4432423352125413'
        const actual2 = polybius('Hello world')
        const expected2 = '3251131343 2543241341'
      expect(actual1).to.eql(expected1);
      expect(actual2).to.eql(expected2);
    });
  
    it('should decode the input correctly', () => {
        const actual3 = polybius('3251131343 2543241341', false)
        const expected3 = 'hello world'
        const actual4 = polybius('4432423352125413', false)
        const expected4 = 'th(i/j)nkful'
      expect(actual3).to.eql(expected3);
      expect(actual4).to.eql(expected4);
    });
  
    it('should return false when decoding with an odd number of characters (excluding spaces)', () => {
        const actual5 = polybius('44324233521254134', false)
      expect(actual5).to.eql(false);
    });
  });