pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract MasterGrow is ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  bool public revealed = false;
  string private revealUrl = "https://filebin.net/33zbgcuf4tl1xa70/notRevealed.json";

  constructor() public ERC721("/* MasterGrow */", "MTGR") {}

  function mintItem(address to, string memory _tokenURI)
      public
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 id = _tokenIds.current();
      _mint(to, id);
      _setTokenURI(id, _tokenURI);

      return id;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory){
    if (revealed == true){
      return super.tokenURI(tokenId);
    } else{
      return revealUrl;
    }
  }

  function revealCollection() public {
    if (revealed == true){
    revealed = false;
    } else{
    revealed = true;
    }
  }

}
