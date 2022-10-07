/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https'})

const delayMS = 1000 //sometimes xDAI needs a 6000ms break lol 😅

const main = async () => {

  // ADDRESS TO MINT TO:
  const toAddress = "0xCA572D590c58b54b960779975fd4B2FCDdba72d7"

  console.log("\n\n 🎫 Minting to "+toAddress+"...\n");

  const { deployer } = await getNamedAccounts();
  const yourCollectible = await ethers.getContract("Botero", deployer);

  const leon1 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/JdgS2m0/nft1.png",
    "name": "Galileo Galilei",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Fisica, Filosofia y Matemática"
       },
       {
         "trait_type": "Epoca",
         "value": 1600
       },
       {
         "trait_type": "Salas de acceso",
         "value": 42
       }
    ]
  }
  console.log("Uploading Galileo Galilei...")
  const uploadedleon1 = await ipfs.add(JSON.stringify(leon1))

  console.log("Minting Galileo Galilei with IPFS hash ("+uploadedleon1.path+")")
  await yourCollectible.mintItem(toAddress,uploadedleon1.path,{gasLimit:10000000})


  await sleep(delayMS)

  const leon2 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/Lr8xpRz/nft2.png",
    "name": "Isaac Newton",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Fisica, Filosofia y Matemática"
       },
       {
         "trait_type": "Epoca",
         "value": 1700
       },
       {
         "trait_type": "Salas de acceso",
         "value": 42
       }
    ]
  }
  console.log("Uploading Isaac Newton...")
  const uploadedleon2 = await ipfs.add(JSON.stringify(leon2))

  console.log("Minting Isaac Newton with IPFS hash ("+uploadedleon2.path+")")
  await yourCollectible.mintItem(toAddress,uploadedleon2.path,{gasLimit:10000000})


  await sleep(delayMS)

  const leon3 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/mCqfbtn/nft3.png",
    "name": "Nicolas Copernico",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Fisica, Filosofia y Matemática"
       },
       {
         "trait_type": "Epoca",
         "value": 1500
       },
       {
         "trait_type": "Salas de acceso",
         "value": 42
       }
    ]
  }
  console.log("Uploading Nicolas Copernico...")
  const uploadedleon3 = await ipfs.add(JSON.stringify(leon3))

  console.log("Minting Nicolas Copernico with IPFS hash ("+uploadedleon3.path+")")
  await yourCollectible.mintItem(toAddress,uploadedleon3.path,{gasLimit:10000000})


  await sleep(delayMS)

  const leon4 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/vqn1bQd/nft4.png",
    "name": "Sistema Solar",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Astrofisica"
       },
       {
         "trait_type": "Epoca",
         "value": 0
       },
       {
         "trait_type": "Salas de acceso",
         "value": 42
       }
    ]
  }
  console.log("Uploading Sistema Solar...")
  const uploadedleon4 = await ipfs.add(JSON.stringify(leon4))

  console.log("Minting Sistema Solar with IPFS hash ("+uploadedleon4.path+")")
  await yourCollectible.mintItem(toAddress,uploadedleon4.path,{gasLimit:10000000})


  await sleep(delayMS)


  const leon5 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/H7yRZCn/nft5.png",
    "name": "Julio Verne",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Literatura"
       },
       {
         "trait_type": "Epoca",
         "value": 1840
       },
       {
         "trait_type": "Salas de acceso",
         "value": 38
       }
    ]
  }
  console.log("Uploading Julio Verne...")
  const uploadedleon5 = await ipfs.add(JSON.stringify(leon5))

  console.log("Minting Julio Verne with IPFS hash ("+uploadedleon5.path+")")
  await yourCollectible.mintItem(toAddress,uploadedleon5.path,{gasLimit:10000000})



  await sleep(delayMS)


  const leon6 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/VxzYyc7/nft6.png",
    "name": "Submarino Julio Verne",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "Literatura"
       },
       {
         "trait_type": "Epoca",
         "value": 1840
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading Submarino Julio Verne...")
  const uploadeleon6 = await ipfs.add(JSON.stringify(leon6))

  console.log("Minting Submarino Julio Verne with IPFS hash ("+uploadeleon6.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon6.path,{gasLimit:10000000})
 /* 


  await sleep(delayMS)


  const leon7 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/d2vy8zp/7.jpg",
    "name": "Leon Galactico #6",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "pink"
       },
       {
         "trait_type": "Epoca",
         "value": "googly"
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading leon7...")
  const uploadeleon7 = await ipfs.add(JSON.stringify(leon7))

  console.log("Minting leon7 with IPFS hash ("+uploadeleon7.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon7.path,{gasLimit:10000000})



  await sleep(delayMS)


  const leon8 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/vYdf1kF/8.jpg",
    "name": "Leon Galactico #6",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "pink"
       },
       {
         "trait_type": "Epoca",
         "value": "googly"
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading leon8...")
  const uploadeleon8 = await ipfs.add(JSON.stringify(leon8))

  console.log("Minting leon8 with IPFS hash ("+uploadeleon8.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon8.path,{gasLimit:10000000})


  const leon9 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/fX4KY1F/9.jpg",
    "name": "Leon Galactico #6",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "pink"
       },
       {
         "trait_type": "Epoca",
         "value": "googly"
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading leon9...")
  const uploadeleon9 = await ipfs.add(JSON.stringify(leon9))

  console.log("Minting leon9 with IPFS hash ("+uploadeleon9.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon9.path,{gasLimit:10000000})



  await sleep(delayMS)


  const leon10 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/7bsphJr/10.jpg",
    "name": "Leon Galactico #6",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "pink"
       },
       {
         "trait_type": "Epoca",
         "value": "googly"
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading leon10...")
  const uploadeleon10 = await ipfs.add(JSON.stringify(leon10))

  console.log("Minting leon10 with IPFS hash ("+uploadeleon10.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon10.path,{gasLimit:10000000})


 await sleep(delayMS)

  const leon11 = {
    "description": "La historia está compuesta de ideas que nacieron en algunas de las mentes más brillantes, el arte y la ciencia se hacen uno para ser el testamento de la creación del hombre en su busqueda interminable de si mismo y su lugar en la naturaleza.",
    "external_url": "https://fidubit.global",// <-- this can link to a page for the specific file too
    "image": "https://i.ibb.co/LpBvm7W/11.jpg",
    "name": "Leon Galactico #6",
    "attributes": [
       {
         "trait_type": "Area del conocimiento",
         "value": "pink"
       },
       {
         "trait_type": "Epoca",
         "value": "googly"
       },
       {
         "trait_type": "Salas de acceso",
         "value": 22
       }
    ]
  }
  console.log("Uploading leon11...")
  const uploadeleon11 = await ipfs.add(JSON.stringify(leon11))

  console.log("Minting leon11 with IPFS hash ("+uploadeleon11.path+")")
  await yourCollectible.mintItem(toAddress,uploadeleon11.path,{gasLimit:10000000}) */



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
