let SecretContent = artifacts.require("./SecretContent.sol");
var sigUtil = require('eth-sig-util')
  
module.exports = function(deployer) {
  deployer.deploy(SecretContent).then(function(secret_contract){
  	console.log(secret_contract.address);

  	// Mint things here and do setup, ownership transfer etc.
  	account0 = { address: "0x64c53376Bc965826955c9693F8F03B5398b077FF", pubKey: "o963R0sjgfHyc7Q7GiyWdpcjhsnM6aX0rFarIVa1sRc=", privKey: "c11e149971763375fa1011d0135bc251c9bcde0364727185d54c9fc476030161"};
  	account1 = { address: "0x01d6bEB66543ad7cCEe2b68CaE7Fe36Db3a16AC8", pubKey: "uTW6GKQwKPoyFJrAp9r4EsHpUZ0HGHzVohY42E5uCnc=", privKey: "fcc244270d06217ae16a4420902a71d3973dfcff9a8cc7135ec8a0d3e5425c71"};
  	account2 = { address: "0x654405fCdfed016cEAb58D78c9250cD3BE79d789", pubKey: "cHRjmTHuLVgQBEq38EDBBdajIf+/FvLK5x54F0GpHjc=", privKey: "c3305f5013c294894be34e7c4e32ab0b4adb448e83521bbb3b452fe71cdda60a"};
  	
  	enc_data = sigUtil.encrypt(account0.pubKey, {data:"123456789"}, "x25519-xsalsa20-poly1305")

  	console.log(enc_data)
  	console.log(sigUtil.decrypt(enc_data, account0.privKey));
  });
};
