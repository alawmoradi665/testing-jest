let { repeatMessage } = require('../source/index');

test("Repeat message is a function.", () => {
    expect(typeof(repeatMessage)).toBe("function");
});