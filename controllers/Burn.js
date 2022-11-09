'use strict';

var utils = require('../utils/writer.js');
var Burn = require('../service/BurnService');

module.exports.nftDeployBurnPOST = function nftDeployBurnPOST (req, res, next, contractAddress, tokenId, chain) {
  Burn.nftDeployBurnPOST(contractAddress, tokenId, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
