const { network } = require("hardhat")
const { verify } = require("../utils/verify")
const { developmentChains } = require("../helper-hardhat-config")
require("dotenv").config()

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("------------------------------------------")
  const args = []
  const nftMarketplace = await deploy("NftMarketplace", {
    from: deployer,
    args: args,
    log: true,
    waitConformations: network.config.blockConformations || 1,
  })
  log(`Nft Martetplace deployed successfully to ${nftMarketplace.address}`)
  log("------------------------------------------")
  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying NftMarketplace contract...")
    await verify(nftMarketplace.address, args)
  }
  log("------------------------------------------")
}

module.exports.tags = ["all", "nftmarketplace"]
