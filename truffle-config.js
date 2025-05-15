module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost
      port: 8545,            // Port Ganache runs on
      network_id: "*"        // Match any network id
    }
  },

  // Other config...
  compilers: {
    solc: {
      version: "0.8.21"      // Match your installed version
    }
  }
};
