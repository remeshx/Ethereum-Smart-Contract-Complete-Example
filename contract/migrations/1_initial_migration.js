const share_manager = artifacts.require("share_manager");

module.exports = function (deployer) {
  deployer.deploy(share_manager);
};
