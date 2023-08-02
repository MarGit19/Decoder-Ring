// Write your tests here!

const { expect } = require('chai');
const { caesar } = require('../src/caesar')

describe('caesar()', () => {
    it("should return the correctly encoded message", () => {
        const actual1 = caesar('thinkful', 3)
        const expected1 = 'wklqnixo'
        expect(actual1).to.eql(expected1);
    });

    it("should return the correctly decoded message", () => {
        const actual2 = caesar('thinkful', -3)
        const expected2 = 'qefkhcri'
        const actual3 = caesar('wklqnixo', 3, false)
        const expected3 = 'thinkful'
        expect(actual2).to.eql(expected2);
        expect(actual3).to.eql(expected3);
    });

    it("should maintain spaced and other symbols", () => {
        const actual4 = caesar('This is a secret message!', 8)
        const expected4 = 'bpqa qa i amkzmb umaaiom!'
        const actual5 = caesar('BPQA qa I amkzmb umaaiom!', 8, false)
        const expected5 = 'this is a secret message!'
        expect(actual4).to.eql(expected4);
        expect(actual5).to.eql(expected5);
    });

    it("should return false if the shift value is invalid", () => {
        const actual6 = caesar('thinkful')
        const actual7 = caesar('thinkful', 99)
        const actual8 = caesar('thinkful', -26)
        expect(actual6).to.eql(false);
        expect(actual7).to.eql(false);
        expect(actual8).to.eql(false);
    });
});
