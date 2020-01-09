const assert = require('chai').assert
const LandWar = artifacts.require("LandWar")

const zero = "0x0000000000000000000000000000000000000000"

contract("LandWar", accounts => {
  let instance
  beforeEach(() => {
    return LandWar.new()
      .then(_instance => {
        instance = _instance
      })
  })

  describe("base operations", () => {

    it("has ownner", () => {
      return instance.owner.call()
        .then(owner => {
          assert.notEqual(owner, zero)
        })
    })
  })
})