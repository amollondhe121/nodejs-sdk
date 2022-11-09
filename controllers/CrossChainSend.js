'use strict';

var utils = require('../utils/writer.js');
var CrossChainSend = require('../service/CrossChainSendService');

module.exports.nftSendCrossChainSendPOST = function nftSendCrossChainSendPOST (req, res, next, sourceChain, destChain, tokenId, sourceWalletAddress, recipientWalletAddress) {
  CrossChainSend.nftSendCrossChainSendPOST(sourceChain, destChain, tokenId, sourceWalletAddress, recipientWalletAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftSendEnableCrossChainSendPOST = function nftSendEnableCrossChainSendPOST (req, res, next, sourceChain, destChain, sourceContractAddress, destContractAddress) {
  CrossChainSend.nftSendEnableCrossChainSendPOST(sourceChain, destChain, sourceContractAddress, destContractAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftSendQuickSendPOST = function nftSendQuickSendPOST (req, res, next, sourceChain, destChain, tokenId, sourceWalletAddress, recipientWalletAddress) {
  CrossChainSend.nftSendQuickSendPOST(sourceChain, destChain, tokenId, sourceWalletAddress, recipientWalletAddress)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
