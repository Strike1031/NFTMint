/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4", settings: 
        {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  }
};
