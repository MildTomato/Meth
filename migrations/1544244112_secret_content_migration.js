let SecretContent = artifacts.require("./SecretContent.sol");
  
module.exports = function(deployer) {
  deployer.deploy(SecretContent);
};
