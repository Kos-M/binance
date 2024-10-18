const { USDMClient } = require('binance');

  // This example shows how to call this Binance API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "binance" for Binance exchange
  // This Binance API SDK is available on npm via "npm install binance"
  // ENDPOINT: fapi/v1/listenKey
  // METHOD: POST
  // PUBLIC: YES

const client = new USDMClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getFuturesUserDataListenKey(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });