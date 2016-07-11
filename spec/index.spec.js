const findVersion = require('../index.js');

describe("index", () => {
  it("finds version in commit message", () => {
    expect(findVersion("Inital commit")).toBeUndefined();
    expect(findVersion("Inital commit 0.0.1")).toBe("0.0.1");
    expect(findVersion("Inital commit 1.2.3")).toBe("1.2.3");
    expect(findVersion("Inital commit 1.2.33")).toBe("1.2.33");
  });
});
