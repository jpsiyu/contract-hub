const LandWar = artifacts.require("LandWar")
module.exports = function (deployer) {
  deployer.deploy(LandWar)
}