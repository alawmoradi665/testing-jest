
const { test } = require('jest-circus');
let { repeatMessage } = require('../source/index');

test("Repeat message is a function.", () => {
    expect(typeof(repeatMessage)).toBe("function");
});


describe('repeatMessage functionality', () => {
    test("Repeat message is a function.", () => {
        expect(typeof(repeatMessage)).toBe("function");
        });

    test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'.", () => {
        expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
        });
})

describe('repeatMessage'), () => {
    test('should throw an error if no string is provided for the message', () => {
        // expect(repeatMessage(1,1).toThrow());
        expect(() => {repeatMessage(1,1)}).toThrow();
    })
}

