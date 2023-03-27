const ethers = require("ethers")

const networkConfig = {
  5: {
    name: "goerli",
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    subscriptionId: "10633",
    callbackGasLimit: "5000000",
    interval: "30",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  31337: {
    name: "hardhat",
    gasLane:
      "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15",
    callbackGasLimit: "5000",
    interval: "30",
  },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = { networkConfig, developmentChains }
