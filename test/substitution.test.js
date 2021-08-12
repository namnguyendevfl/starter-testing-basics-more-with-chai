// Write your tests here!
const {expect} = require("chai")
const substitutionModule = require("../src/substitution.js")
const substitution = substitutionModule.substitution

describe("substitution tests written by Nam Nguyen", () => {
    describe("error handling", () => {
        it("should return false if the given alphabet is invalid",() =>{
            const actual = substitution("thinkful")
            expect(actual).to.be.false
        })
        it("should return false if the given alphabet length is not equal 26",() =>{
            const actual = substitution("thinkful", "short")
            expect(actual).to.be.false
        })
        it("should return false if the given alphabet does not have unique characters",() =>{
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
            expect(actual).to.be.false
        })
    })
    describe("encoding a message", () => {
        it("should encode a message by using the given alphabet",() =>{
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
            const expected = 'jrufscpw'
            expect(actual).to.equal(expected)
        })
        it("should leave spaces as is ",() =>{
            const actual = substitution("think ful", "xoyqmcgrukswaflnthdjpzibev")
            const expected = 'jrufs cpw'
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with a unique character ",() =>{
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
            const expected = "y&ii$r&"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding a message", () => {
        it("should decode a message by using the given alphabet",() =>{
            const actual = substitution('jrufscpw', "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "thinkful" 
            expect(actual).to.equal(expected)
        })
        it("should leave spaces as is ",() =>{
            const actual = substitution('jrufs cpw', "xoyqmcgrukswaflnthdjpzibev", false)
            const expected = "think ful" 
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with a unique character ",() =>{
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
            const expected = "message"
            expect(actual).to.equal(expected)
        })
    })
})
