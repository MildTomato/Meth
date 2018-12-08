pragma solidity ^0.4.24;
  
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Pausable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract SecretContent is Ownable, ERC721Full, ERC721Pausable {
  constructor() ERC721Full("SecretContent", "SCNT") public {
  }
}
