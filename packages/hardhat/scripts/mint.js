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

  const yourCollectible = await ethers.getContract("MasterGrow", deployer);

  //primeros 10

  const mastergrow1 = {
    "name": "MasterGrow_1",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/gznjK7P/Master-Grow-1.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow1...")
  const master1 = await ipfs.add(JSON.stringify(mastergrow1))

  console.log("Minting mastergrow1 with IPFS hash ("+master1.path+")")
  await yourCollectible.mintItem(toAddress,master1.path,{gasLimit:10000000})


  await sleep(delayMS) 

  
  const mastergrow2 = {
    "name": "MasterGrow_2",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/YWnN7DP/Master-Grow-2.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow2...")
  const master2 = await ipfs.add(JSON.stringify(mastergrow2))

  console.log("Minting mastergrow2 with IPFS hash ("+master2.path+")")
  await yourCollectible.mintItem(toAddress,master2.path,{gasLimit:10000000})


  await sleep(delayMS)

  const mastergrow3 = {
    "name": "MasterGrow_3",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/Y0DK70V/Master-Grow-3.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow3...")
  const master3 = await ipfs.add(JSON.stringify(mastergrow3))

  console.log("Minting mastergrow3 with IPFS hash ("+master3.path+")")
  await yourCollectible.mintItem(toAddress,master3.path,{gasLimit:10000000})

  await sleep(delayMS)


  const mastergrow4 = {
    "name": "MasterGrow_4",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/pyF6BT5/Master-Grow-4.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow4...")
  const master4 = await ipfs.add(JSON.stringify(mastergrow4))

  console.log("Minting mastergrow4 with IPFS hash ("+master4.path+")")
  await yourCollectible.mintItem(toAddress,master4.path,{gasLimit:10000000})

  await sleep(delayMS)


  const mastergrow5 = {
    "name": "MasterGrow_5",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/ydPZFpJ/Master-Grow-5.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow5...")
  const master5 = await ipfs.add(JSON.stringify(mastergrow5))

  console.log("Minting mastergrow5 with IPFS hash ("+master5.path+")")
  await yourCollectible.mintItem(toAddress,master5.path,{gasLimit:10000000})

  await sleep(delayMS)
/*
  const mastergrow6 = {
    "name": "MasterGrow_6",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/2jTCKFT/Master-Grow-6.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothe"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow6...")
  const master6 = await ipfs.add(JSON.stringify(mastergrow6))

  console.log("Minting mastergrow6 with IPFS hash ("+master6.path+")")
  await yourCollectible.mintItem(toAddress,master6.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow7 = {
    "name": "MasterGrow_7",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/xfQ55KR/Master-Grow-7.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow7...")
  const master7 = await ipfs.add(JSON.stringify(mastergrow7))

  console.log("Minting mastergrow7 with IPFS hash ("+master7.path+")")
  await yourCollectible.mintItem(toAddress,master7.path,{gasLimit:10000000})

  await sleep(delayMS) 

  const mastergrow8 = {
    "name": "MasterGrow_8",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/ynPD1yp/Master-Grow-8.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow8...")
  const master8 = await ipfs.add(JSON.stringify(mastergrow8))

  console.log("Minting mastergrow8 with IPFS hash ("+master8.path+")")
  await yourCollectible.mintItem(toAddress,master8.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow9 = {
    "name": "MasterGrow_9",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/9wfw5GR/Master-Grow-9.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow9...")
  const master9 = await ipfs.add(JSON.stringify(mastergrow9))

  console.log("Minting mastergrow9 with IPFS hash ("+master9.path+")")
  await yourCollectible.mintItem(toAddress,master9.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow10 = {
    "name": "MasterGrow_10",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/zF52TMM/Master-Grow-10.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow10...")
  const master10 = await ipfs.add(JSON.stringify(mastergrow10))

  console.log("Minting mastergrow10 with IPFS hash ("+master10.path+")")
  await yourCollectible.mintItem(toAddress,master10.path,{gasLimit:10000000})

  await sleep(delayMS)

  //segundos 10

  const mastergrow11 = {
    "name": "MasterGrow_11",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/4RkvJPh/Master-Grow-11.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow11...")
  const master11 = await ipfs.add(JSON.stringify(mastergrow11))

  console.log("Minting mastergrow11 with IPFS hash ("+master11.path+")")
  await yourCollectible.mintItem(toAddress,master11.path,{gasLimit:10000000})


  await sleep(delayMS) 

  
  const mastergrow12 = {
    "name": "MasterGrow_12",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/qNhk7Fm/Master-Grow-12.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow12...")
  const master12 = await ipfs.add(JSON.stringify(mastergrow12))

  console.log("Minting mastergrow12 with IPFS hash ("+master12.path+")")
  await yourCollectible.mintItem(toAddress,master12.path,{gasLimit:10000000})


  await sleep(delayMS)

  const mastergrow13 = {
    "name": "MasterGrow_13",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/HDYCCDw/Master-Grow-13.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow13...")
  const master13 = await ipfs.add(JSON.stringify(mastergrow13))

  console.log("Minting mastergrow13 with IPFS hash ("+master13.path+")")
  await yourCollectible.mintItem(toAddress,master13.path,{gasLimit:10000000})

  await sleep(delayMS)


  const mastergrow14 = {
    "name": "MasterGrow_14",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/zVp59h3/Master-Grow-14.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow14...")
  const master14 = await ipfs.add(JSON.stringify(mastergrow14))

  console.log("Minting mastergrow14 with IPFS hash ("+master14.path+")")
  await yourCollectible.mintItem(toAddress,master14.path,{gasLimit:10000000})

  await sleep(delayMS)


  const mastergrow15 = {
    "name": "MasterGrow_15",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/J2x6C1p/Master-Grow-15.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }
   
  console.log("Uploading mastergrow15...")
  const master15 = await ipfs.add(JSON.stringify(mastergrow15))

  console.log("Minting mastergrow15 with IPFS hash ("+master15.path+")")
  await yourCollectible.mintItem(toAddress,master15.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow16 = {
    "name": "MasterGrow_16",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/VCrNjKm/Master-Grow-16.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothe"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow16...")
  const master16 = await ipfs.add(JSON.stringify(mastergrow16))

  console.log("Minting mastergrow16 with IPFS hash ("+master16.path+")")
  await yourCollectible.mintItem(toAddress,master16.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow17 = {
    "name": "MasterGrow_17",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/PQx8CqD/Master-Grow-17.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow17...")
  const master17 = await ipfs.add(JSON.stringify(mastergrow17))

  console.log("Minting mastergrow17 with IPFS hash ("+master17.path+")")
  await yourCollectible.mintItem(toAddress,master17.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow18 = {
    "name": "MasterGrow_18",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/BgQKL2q/Master-Grow-18.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow18...")
  const master18 = await ipfs.add(JSON.stringify(mastergrow18))

  console.log("Minting mastergrow18 with IPFS hash ("+master18.path+")")
  await yourCollectible.mintItem(toAddress,master18.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow19 = {
    "name": "MasterGrow_19",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/WcJhvM5/Master-Grow-19.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow19...")
  const master19 = await ipfs.add(JSON.stringify(mastergrow19))

  console.log("Minting mastergrow19 with IPFS hash ("+master19.path+")")
  await yourCollectible.mintItem(toAddress,master19.path,{gasLimit:10000000})

  await sleep(delayMS)

  const mastergrow20 = {
    "name": "MasterGrow_20",
    "description": "MasterGrow",
    "image": "https://i.ibb.co/RSRnp92/Master-Grow-20.jpg",
    "attributes": [
     {
      "trait_type": "Accesories",
      "value": "Accesories"
     },
     {
      "trait_type": "Body",
      "value": "Old Man"
     },
     {
      "trait_type": "Clothes",
      "value": "Clothes"
     },
     {
      "trait_type": "Hat",
      "value": "Hat"
     },
     {
      "trait_type": "Magic Ball",
      "value": "Magic Ball"
     },
     {
      "trait_type": "Orb Inside",
      "value": "Orb Inside"
     },
     {
      "trait_type": "Orb Light",
      "value": "Orb Light"
     }
    ]
   }   
   
  console.log("Uploading mastergrow20...")
  const master20 = await ipfs.add(JSON.stringify(mastergrow20))

  console.log("Minting mastergrow20 with IPFS hash ("+master20.path+")")
  await yourCollectible.mintItem(toAddress,master20.path,{gasLimit:10000000})

  await sleep(delayMS)*/


  // TRANSFERRING OWNERSHIP OF THE CONTRACT

  console.log("Transferring Ownership of WIZARD to "+toAddress+"...")

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
