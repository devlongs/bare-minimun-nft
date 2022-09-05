const { ethers } = require("hardhat");

async function main() {
  const simpleNFTContract = await ethers.getContractFactory("SimpleNFT");


  const deployedSimpleNFTContract = await simpleNFTContract.deploy();
  
  await deployedSimpleNFTContract.deployed();

  console.log("NFT Contract Address:", deployedSimpleNFTContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });