const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKey = "privateKey";
const endpointUrl = "endpointUrl";

module.exports = {

  networks: {

    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          [privateKey],
          //url to ethereum node
          endpointUrl
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 3
    }
  },


  compilers: {
    solc: {
      version: "^0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)

    }
  },

  db: {
    enabled: false
  }
};
