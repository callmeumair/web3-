import { ethers } from "hardhat";

async function main() {
  const SimpleToken = await ethers.getContractFactory("SimpleToken");
  console.log("Deploying SimpleToken...");
  
  const token = await SimpleToken.deploy();
  await token.waitForDeployment();
  
  const address = await token.getAddress();
  console.log("SimpleToken deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 