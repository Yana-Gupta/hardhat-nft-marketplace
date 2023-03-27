const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
  console.log("Verifying contract: ", contractAddress)
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.toLowerCase().includes("already verified")) {
      console.log("Contract already verified")
    } else {
      console.log("Error verifying contract: ", e)
    }
  }
}

module.exports = { verify }
