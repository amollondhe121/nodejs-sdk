'use strict';

var utils = require('../utils/writer.js');
var Update = require('../service/UpdateService');

module.exports.nftDeployUpdateContractPOST = function nftDeployUpdateContractPOST (req, res, next, contractAddress, chain, tokenURIPrereveal, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, baseTokenURI) {
  Update.nftDeployUpdateContractPOST(contractAddress, chain, tokenURIPrereveal, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, baseTokenURI)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDeployUpdateWithdrawFundsPOST = function nftDeployUpdateWithdrawFundsPOST (req, res, next, contractAddress, withdrawAddress, chain) {
  Update.nftDeployUpdateWithdrawFundsPOST(contractAddress, withdrawAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUpdateAddToAllowListPOST = function nftUpdateAddToAllowListPOST (req, res, next, contractAddress, addresses, mintSlots, chain) {
  Update.nftUpdateAddToAllowListPOST(contractAddress, addresses, mintSlots, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUpdateTransferOperatorPOST = function nftUpdateTransferOperatorPOST (req, res, next, contractAddress, newOperatorAddress, chain) {
  Update.nftUpdateTransferOperatorPOST(contractAddress, newOperatorAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
