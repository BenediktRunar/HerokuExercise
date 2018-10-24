const greeting = require("./index");

describe("Greeting", () => {
  it("should return a greeting with the name", () => {
    expect(greeting("Leia")).toBe("Greetings, Leia!");
  });
});
