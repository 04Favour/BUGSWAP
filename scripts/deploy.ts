// scripts/deploy.ts
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const BugSwap = await ethers.getContractFactory("BugSwap");
  const bugswap = await BugSwap.deploy("0x4f72ff1ecc6103f730d4e2f5e5256a409e32b765", "0xc601488e9221b94c4003e3eda5c6d70df45e674d");


  console.log("BugSwap deployed to:", bugswap.getAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
