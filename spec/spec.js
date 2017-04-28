let converter = require("../script");

describe("number converter", function(){
  it("converts 0", function() {
    expect(converter(0)).toBe("._.\n|.|\n|_|");
  });
  it("converts 1", function() {
    expect(converter(1)).toBe("..|\n..|\n..|");
  });
  it("converts 2", function() {
    expect(converter(2)).toBe("._.\n._|\n|_.");
  });
  it("converts 3", function() {
    expect(converter(3)).toBe("._.\n._|\n._|");
  });
  it("converts 4", function() {
    expect(converter(4)).toBe("...\n|_|\n..|");
  });
  it("converts 5", function() {
    expect(converter(5)).toBe("._.\n|_.\n._|");
  });
  it("converts 6", function() {
    expect(converter(6)).toBe("._.\n|_.\n|_|");
  });
  it("converts 7", function() {
    expect(converter(7)).toBe("._.\n..|\n..|");
  });
  it("converts 8", function() {
    expect(converter(8)).toBe("._.\n|_|\n|_|");
  });
  it("converts 9", function() {
    expect(converter(9)).toBe("._.\n|_|\n..|");
  });
});
