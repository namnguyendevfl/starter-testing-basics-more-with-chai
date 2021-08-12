// Write your tests here!
const expect = require("chai").expect
const caesarModule  = require("../src/caesar.js")
const caesar = caesarModule.caesar

describe("casear() tests written by Nam Nguyen", () => {
//set up constraints for the shift value 
describe("error handling", () => {
    it("should return false if the shift value is 0", () => {
        const actual = caesar("thinkful", 0)
        expect(actual).to.be.false
    }
    )
    it("should return false if the shift value is less than 25", () => {
        const actual = caesar("thinkful", 30)
        expect(actual).to.be.false
    }
    )
    it("should return false if the shift value is higher than 25", () => {
        const actual = caesar("thinkful", 0)
        expect(actual).to.be.false
    }
    )
})
//start encoding 
describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
        const actual = caesar("thinkful", 3)
        const expected = "wklqnixo"
        expect(actual).to.equal(expected)
    }
    )
    it("should leave spaces and other symbols as is", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    }
    )
    it("should ignore capital letters", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    })
    it("should appropriatelt handle letters at the end of the alphabet", () => {
        const actual = caesar("This is a secret message!", 8)
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.equal(expected)
    }
    )
    it("should to a negative shift that will shift to the left", () => {
        const actual = caesar("thinkful", -3)
        const expected = "qefkhcri"
        expect(actual).to.equal(expected)
    }
    )
})
//start decoding
describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
        const actual = caesar("wklqnixo", 3, false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    }
    )
    it("should leave spaces and other symbols as is", () => {
        const actual = caesar("Bpqa qa i amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected)
    }
    )
    it("should ignore capital letters", () => {
        const actual = caesar("Bpqa qa i amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected)
    })
    it("should appropriatelt handle letters at the end of the alphabet", () => {
        const actual = caesar("Bpqa qa i amkzmb umaaiom!", 8, false)
        const expected = "this is a secret message!"
        expect(actual).to.equal(expected)
    }
    )
    it("should to a negative shift that will shift to the left", () => {
        const actual = caesar("qefkhcri", -3,false)
        const expected = "thinkful"
        expect(actual).to.equal(expected)
    }
    )
})
})
