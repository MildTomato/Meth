pragma solidity ^0.4.24;
  
import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Pausable.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract SecretContent is Ownable, ERC721MetadataMintable, ERC721Pausable {
    constructor() ERC721Metadata("SecretContent", "SCNT") public {
    }


    struct Bid {
        uint timestamp;
        uint amount;
        address bidder;
        bool accepted;
        string pubKey;
    }


    event NewBid(
        uint timestamp,
        uint amount,
        address bidder,
        bool accepted,
        string pubKey
    );


    // mapping current highest bids
    // we should be storing all previous bids so that the seller can accept any previous
    mapping(uint256 => Bid) private _highestBids;


    function submit_bid(uint amount, uint256 tokenId, string pubKey) public payable {
        require(_exists(tokenId));

        Bid memory currentHighestBid = _highestBids[tokenId];

        // ensure the current bid hasn't been accepted and that the new bid is higher
        require(amount > currentHighestBid.amount);
        require(true != currentHighestBid.accepted);

        // for now we just store the highest bid
        _highestBids[tokenId] = Bid(now, amount, msg.sender, false, pubKey);

        emit NewBid(now, amount, msg.sender, false, pubKey);
    }


    function accept_bid(uint256 tokenId, address bidder, uint amount, string newUri) public {
        address tokenOwner = ownerOf(tokenId);
        assert(tokenOwner == msg.sender);

        Bid memory currentHighestBid = _highestBids[tokenId];
        require(currentHighestBid.amount == amount);
        require(currentHighestBid.bidder == bidder);
        require(currentHighestBid.accepted == false);

        _setTokenURI(tokenId, newUri);
        safeTransferFrom(msg.sender, bidder, tokenId);
        msg.sender.transfer(currentHighestBid.amount);

        // replace with accepted bid
        _highestBids[tokenId] = Bid(currentHighestBid.timestamp,
            currentHighestBid.amount,
            currentHighestBid.bidder,
            true,
            currentHighestBid.pubKey);
    }


    // function submit_challenge() {

    // }
}
