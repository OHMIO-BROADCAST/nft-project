pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract OHMIOBox is ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  bool private revealed = false;
  string private revealUrl = "https://store3.gofile.io/download/508209d9-8b73-4e41-9c9f-36ead22d382c/notRevealed.json";

  constructor() public ERC721("OHMIOBox", "OHMIOB") {}

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
    revealed = true;
  }
}
