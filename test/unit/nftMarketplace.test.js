const { deployments, ethers, network } = require("hardhat")
const { assert, expect } = require("chai")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("NFTMarketplace test", function () {
      4
      let nftMarketplaceContract, basicNftContract, nftMarketplace, basicNft
      const PRICE = ethers.utils.parseEther("1")
      const TOKEN_ID = 0
      beforeEach(async function () {
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        player = accounts[1]
        await deployments.fixture(["all"])
        nftMarketplaceContract = await ethers.getContract("NftMarketplace")
        nftMarketplace = await nftMarketplaceContract.connect(deployer)
        basicNftContract = await ethers.getContract("BasicNft")
        basicNft = await basicNftContract.connect(deployer)
        await basicNft.mintNft()
        await basicNft.approve(nftMarketplaceContract.address, TOKEN_ID, PRICE)
      })
      describe("ListItem", function () {
        it("Lists nft", async function () {})
      })
    })
