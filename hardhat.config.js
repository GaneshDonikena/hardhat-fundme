require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

const RINKEBY_URL_RPC =
    process.env.RINKEBY_URL_RPC ||
    "https://eth-rinkeby.alchemyapi.io/v2/9s8EefzExTm_RXiuFjQ3EOldqJ5tpUlk"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "0x952d2dae956dfb28ba1dd51731915f6a7132477283e33dcac4f28ad29d2a3e03"
const COINMARKETCAP_API_KEY = "a9b87b38-fd72-4370-8dda-56e604baee34"

module.exports = {
    solidity: {
        compilers: [
            { version: "0.8.4" },
            { version: "0.7.0" },
            { version: "0.6.0" },
        ],
    },
    defaultNetwork: "hardhat",

    networks: {
        hardhat: {
            chainId: 31337,
        },
        rinkeby: {
            url: RINKEBY_URL_RPC,
            chainId: 4,
            accounts: [PRIVATE_KEY],
        },
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        //coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
}
