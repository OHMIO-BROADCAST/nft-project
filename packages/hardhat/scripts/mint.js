/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");

const projectId = '2FmUhj741oa51XNDW29eBxI3rv2';   // <---------- your Infura Project ID
const projectSecret = '6ade7a8e70b6a5f12ba766bbe85547e7';  // <---------- your Infura Secret
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https', headers: {
  authorization: auth,
}})

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0xCA572D590c58b54b960779975fd4B2FCDdba72d7"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("OHMIOBox", deployer);

  const ohmiobox1 = {
    "description": "This is an OHMIO Box, is the key of the future and your tool into the OHMIO Universe.",
    "external_url": "https://nft.ohmiobroadcast.io",// <-- this can link to a page for the specific file too
    "image": "https://store4.gofile.io/download/fdc7e7bb-89ce-4634-9a5d-1f22b8695642/OHMIOBOX_10001-0200.mp4",
    "name": "OHMIO Box",
    "attributes": [
      {
        "trait_type": "Antenna",
        "value": "Noise"
       },
       {
        "trait_type": "Body",
        "value": "Rf Spectrum"
       },
       {
        "trait_type": "Cord",
        "value": "Multiware"
       },
       {
        "trait_type": "Keypad",
        "value": "Rayzer"
       },
       {
        "trait_type": "Waveform",
        "value": "Square"
       }
    ]
  }



  console.log("Uploading ohmiobox1...")
  const ohmiob1 = await ipfs.add(JSON.stringify(ohmiobox1))

  console.log("Minting ohmiobox1 with IPFS hash ("+ohmiob1.path+")")
  await yourCollectible.mintItem(toAddress,ohmiob1.path,{gasLimit:10000000})


  await sleep(delayMS) 

  
  const ohmiobox2 = {
    "description": "This is an OHMIO Box, is the key of the future and your tool into the OHMIO Universe.",
    "external_url": "https://nft.ohmiobroadcast.io",// <-- this can link to a page for the specific file too
    "image": "https://store4.gofile.io/download/fdc7e7bb-89ce-4634-9a5d-1f22b8695642/OHMIOBOX_10001-0200.mp4",
    "name": "OHMIO Box",
    "attributes": [
      {
        "trait_type": "Antenna",
        "value": "Noise"
       },
       {
        "trait_type": "Body",
        "value": "Rf Spectrum"
       },
       {
        "trait_type": "Cord",
        "value": "Multiware"
       },
       {
        "trait_type": "Keypad",
        "value": "Rayzer"
       },
       {
        "trait_type": "Waveform",
        "value": "Square"
       }
    ]
  }
  console.log("Uploading ohmiobox2...")
  const ohmiob2 = await ipfs.add(JSON.stringify(ohmiobox2))

  console.log("Minting ohmiobox2 with IPFS hash ("+ohmiob2.path+")")
  await yourCollectible.mintItem(toAddress,ohmiob2.path,{gasLimit:10000000})


  await sleep(delayMS)

  const ohmiobox3 = {
    "description": "This is an OHMIO Box, is the key of the future and your tool into the OHMIO Universe.",
    "external_url": "https://nft.ohmiobroadcast.io",// <-- this can link to a page for the specific file too
    "image": "https://store4.gofile.io/download/fdc7e7bb-89ce-4634-9a5d-1f22b8695642/OHMIOBOX_10001-0200.mp4",
    "name": "OHMIO Box",
    "attributes": [
      {
        "trait_type": "Antenna",
        "value": "Noise"
       },
       {
        "trait_type": "Body",
        "value": "Rf Spectrum"
       },
       {
        "trait_type": "Cord",
        "value": "Multiware"
       },
       {
        "trait_type": "Keypad",
        "value": "Rayzer"
       },
       {
        "trait_type": "Waveform",
        "value": "Square"
       }
    ]
  }
  console.log("Uploading ohmiobox3...")
  const ohmiob3 = await ipfs.add(JSON.stringify(ohmiobox3))

  console.log("Minting ohmiobox3 with IPFS hash ("+ohmiob3.path+")")
  await yourCollectible.mintItem(toAddress,ohmiob3.path,{gasLimit:10000000})

  await sleep(delayMS)


  const ohmiobox4 = {
    "description": "This is an OHMIO Box, is the key of the future and your tool into the OHMIO Universe.",
    "external_url": "https://nft.ohmiobroadcast.io",// <-- this can link to a page for the specific file too
    "image": "https://store4.gofile.io/download/fdc7e7bb-89ce-4634-9a5d-1f22b8695642/OHMIOBOX_10001-0200.mp4",
    "name": "OHMIO Box",
    "attributes": [
      {
        "trait_type": "Antenna",
        "value": "Noise"
       },
       {
        "trait_type": "Body",
        "value": "Rf Spectrum"
       },
       {
        "trait_type": "Cord",
        "value": "Multiware"
       },
       {
        "trait_type": "Keypad",
        "value": "Rayzer"
       },
       {
        "trait_type": "Waveform",
        "value": "Square"
       }
    ]
  }
  console.log("Uploading ohmiobox4...")
  const ohmiob4 = await ipfs.add(JSON.stringify(ohmiobox4))

  console.log("Minting ohmiobox4 with IPFS hash ("+ohmiob4.path+")")
  await yourCollectible.mintItem(toAddress,ohmiob4.path,{gasLimit:10000000})

  await sleep(delayMS)


  const ohmiobox5 = {
    "description": "This is an OHMIO Box, is the key of the future and your tool into the OHMIO Universe.",
    "external_url": "https://nft.ohmiobroadcast.io",// <-- this can link to a page for the specific file too
    "image": "https://store4.gofile.io/download/fdc7e7bb-89ce-4634-9a5d-1f22b8695642/OHMIOBOX_10001-0200.mp4",
    "name": "OHMIO Box",
    "attributes": [
      {
        "trait_type": "Antenna",
        "value": "Noise"
       },
       {
        "trait_type": "Body",
        "value": "Rf Spectrum"
       },
       {
        "trait_type": "Cord",
        "value": "Multiware"
       },
       {
        "trait_type": "Keypad",
        "value": "Rayzer"
       },
       {
        "trait_type": "Waveform",
        "value": "Square"
       }
    ]
  }
  console.log("Uploading ohmiobox5...")
  const ohmiob5 = await ipfs.add(JSON.stringify(ohmiobox5))

  console.log("Minting ohmiobox5 with IPFS hash ("+ohmiob5.path+")")
  await yourCollectible.mintItem(toAddress,ohmiob5.path,{gasLimit:10000000})

  await sleep(delayMS)



  // TRANSFERRING OWNERSHIP OF THE CONTRACT

  console.log("Transferring Ownership of OHMIOBOX to "+toAddress+"...")

  await yourCollectible.transferOwnership(toAddress,{gasLimit:10000000})

  await sleep(delayMS)

  /*


  console.log("Minting zebra...")
  await yourCollectible.mintItem("0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1","zebra.jpg")

  */


  //const secondContract = await deploy("SecondContract")

  // const exampleToken = await deploy("ExampleToken")
  // const examplePriceOracle = await deploy("ExamplePriceOracle")
  // const smartContractWallet = await deploy("SmartContractWallet",[exampleToken.address,examplePriceOracle.address])



  /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */


  /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const yourContract = await deploy("YourContract", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */


  /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const yourContract = await deploy("YourContract", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
