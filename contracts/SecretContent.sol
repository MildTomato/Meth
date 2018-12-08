pragma solidity ^0.4.24;
  
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Pausable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract SecretContent is Ownable, ERC721Full, ERC721Pausable {
    constructor() ERC721Full("SecretContent", "SCNT") public {
    }


    struct Bid {
        uint timestamp;
        uint amount;
        address bidder;
        bool accepted;
    }


    event NewBid(
        uint timestamp,
        uint amount,
        address bidder,
        bool accepted
    );


    // mapping current highest bids
    // we should be storing all previous bids so that the seller can accept any previous
    mapping(uint256 => Bid) private _highestBids;


    function submit_bid(uint amount, uint256 tokenId) public {
        require(_exists(tokenId));

        Bid memory currentHighestBid = _highestBids[tokenId];

        // ensure the current bid hasn't been accepted and that the new bid is higher
        require(amount > currentHighestBid.amount);
        require(true != currentHighestBid.accepted);

        // for now we just store the highest bid
        _highestBids[tokenId] = Bid(now, amount, msg.sender, false);

        emit NewBid(now, amount, msg.sender, false);
    }


    function accept_bid(uint256 tokenId, address bidder, uint amount) public {
        address tokenOwner = ownerOf(tokenId);
        assert(tokenOwner == msg.sender);

        Bid memory currentHighestBid = _highestBids[tokenId];
        require(currentHighestBid.amount == amount);
        require(currentHighestBid.bidder == bidder);
        require(currentHighestBid.accepted == false);
    }


    // function submit_challenge() {

    // }
}
