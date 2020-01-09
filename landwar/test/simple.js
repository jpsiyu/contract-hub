const LandWar = artifacts.require("LandWar")

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
          assert(owner !== "")
        })
    })
  })
})