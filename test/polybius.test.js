// Write your tests here!
const {expect} = require("chai")
const polybiusModule = require("../src/polybius.js")
const polybius = polybiusModule.polybius
describe("substitution tests written by Nam Nguyen", () => {
    describe("encoding a message", () => {
        it ("should encode a message by translating each letter into a pair of numbers",() => {
            const actual = polybius("Hello world")
            const expected = "3251131343 2543241341"
            expect(actual).to.equal(expected)
        })
        it ("should leave spaces as is ",() => {
            const actual = polybius("Hello world")
            const expected = "3251131343 2543241341"
            expect(actual).to.equal(expected)
        })
        it ("should translate both 'i' or 'j' to 42 ",() => {
            const actual = polybius("i j")
            const expected = "42 42"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding a message", () => {
        it ("should return fall if the length of numbers is odd",() => {
            const actual = polybius("423",false)
            expect(actual).to.be.false
        })
        it ("should decode a message by translating each pair of numbers into a number",() => {
            const actual = polybius("3251131343", false)
            const expected = "hello"
            expect(actual).to.equal(expected)
        })
        it ("should leave spaces as is ",() => {
            const actual = polybius("3251131343 2543241341",false)
            const expected = "hello world"
            expect(actual).to.equal(expected)
        })
        it ("should translate 42 to both 'i' or 'j'",() => {
            const actual = polybius("42",false)
            const expected = "i/j"
            expect(actual).to.equal(expected)
        })
    })
    
})
