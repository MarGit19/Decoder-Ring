// Write your tests here!

const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe("substitution()", () => {
  it("should encode the input string correctly with a valid alphabet", () => {
    const actual1 = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
    const expected1 = "jrufscpw"
    const actual2 =substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    const expected2 = "elp xhm xf mbymwwmfj dne";
    const actual3 = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
    const expected3 = "y&ii$r&"
    expect(actual1).to.eql(expected1);
    expect(actual2).to.eql(expected2);
    expect(actual3).to.eql(expected3);
  });

  it("should decode the input string correctly with a valid alphabet", () => {
    const actual4 = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    const expected4 = "thinkful"
    const actual5 = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    const expected5 = "message"
    expect(actual4).to.eql(expected4);
    expect(actual5).to.eql(expected5);
  });

  it("should return false if the alphabet is invalid", () => {
    const actual6 = substitution("thinkful", "short")
    const actual7 = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
    expect(actual6).to.eql(false);
    expect(actual7).to.eql(false);
  });

  it("should handle special characters in the alphabet", () => {
    const actual8 = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected8 = "y&ii$r&";
    expect(actual8).to.eql(expected8);
  });

  it("should maintain spaces in the message when decoding", () => {
    const actual10 = substitution("p ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);
    const expected10 = "a message"
    expect(actual10).to.eql(expected10);
  });
});