/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0xCA572D590c58b54b960779975fd4B2FCDdba72d7"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("Botero", deployer);

  const muerto1 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto1",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/3z7ZZcn/1.jpg",
    "name": "Muerto #1",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 42
       }
    ]
  }
  console.log("Uploading muerto1...")
  const uploadedmuerto1 = await ipfs.add(JSON.stringify(muerto1))

  console.log("Minting muerto1 with IPFS hash ("+uploadedmuerto1.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmuerto1.path,{gasLimit:10000000})


  await sleep(delayMS)

  const muerto2 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto2",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/L8j8Zqk/2.jpg",
    "name": "Muerto #2",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 42
       }
    ]
  }
  console.log("Uploading muerto2...")
  const uploadedmuerto2 = await ipfs.add(JSON.stringify(muerto2))

  console.log("Minting muerto2 with IPFS hash ("+uploadedmuerto2.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmuerto2.path,{gasLimit:10000000})


  await sleep(delayMS)

  const muerto3 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto3",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/WGyMw2M/3.jpg",
    "name": "Muerto #3",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 42
       }
    ]
  }
  console.log("Uploading muerto3...")
  const uploadedmuerto3 = await ipfs.add(JSON.stringify(muerto3))

  console.log("Minting muerto3 with IPFS hash ("+uploadedmuerto3.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmuerto3.path,{gasLimit:10000000})


  await sleep(delayMS)

  const muerto4 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto4",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/SQfdLKz/4.jpg",
    "name": "Muerto #4",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "green"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 42
       }
    ]
  }
  console.log("Uploading muerto4...")
  const uploadedmuerto4 = await ipfs.add(JSON.stringify(muerto4))

  console.log("Minting muerto4 with IPFS hash ("+uploadedmuerto4.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmuerto4.path,{gasLimit:10000000})


  await sleep(delayMS)


  const muerto5 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto5",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/BVWF340/5.jpg",
    "name": "Muerto #5",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "blue"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 38
       }
    ]
  }
  console.log("Uploading muerto5...")
  const uploadedmuerto5 = await ipfs.add(JSON.stringify(muerto5))

  console.log("Minting muerto5 with IPFS hash ("+uploadedmuerto5.path+")")
  await yourCollectible.mintItem(toAddress,uploadedmuerto5.path,{gasLimit:10000000})



  await sleep(delayMS)


  const muerto6 = {
    "description": "Capitan de las zombras, la vida y la muerte, muerto6",
    "external_url": "https://dataplugin.ubidots.com",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/F8GdgLS/6.jpg",
    "name": "Muerto #6",
    "attributes": [
       {
         "trait_type": "BackgroundColor",
         "value": "pink"
       },
       {
         "trait_type": "Eyes",
         "value": "googly"
       },
       {
         "trait_type": "Stamina",
         "value": 22
       }
    ]
  }
  console.log("Uploading muerto6...")
  const uploademuerto6 = await ipfs.add(JSON.stringify(muerto6))

  console.log("Minting muerto6 with IPFS hash ("+uploademuerto6.path+")")
  await yourCollectible.mintItem(toAddress,uploademuerto6.path,{gasLimit:10000000})



  await sleep(delayMS)






  await sleep(delayMS)

  console.log("Transferring Ownership of Botero to "+toAddress+"...")

  await yourCollectible.transferOwnership(toAddress)

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
