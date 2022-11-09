'use strict';

var utils = require('../utils/writer.js');
var Mint = require('../service/MintService');

module.exports.nftMintCollectionReserveMintPOST = function nftMintCollectionReserveMintPOST (req, res, next, mintQty, contractAddress, recipientAddress, chain) {
  Mint.nftMintCollectionReserveMintPOST(mintQty, contractAddress, recipientAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftMintCustomContractMintFromFilePOST = function nftMintCustomContractMintFromFilePOST (req, res, next, filePath, name, description, recipientAddress, contractAddress, chain) {
  Mint.nftMintCustomContractMintFromFilePOST(filePath, name, description, recipientAddress, contractAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftMintCustomContractMintFromMetadataUrlPOST = function nftMintCustomContractMintFromMetadataUrlPOST (req, res, next, metadataUrl, contractAddress, recipientAddress, chain) {
  Mint.nftMintCustomContractMintFromMetadataUrlPOST(metadataUrl, contractAddress, recipientAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftMintQuickMintFromFilePOST = function nftMintQuickMintFromFilePOST (req, res, next, filePath, name, description, recipientAddress, allowPlatformToOperateToken, chain) {
  Mint.nftMintQuickMintFromFilePOST(filePath, name, description, recipientAddress, allowPlatformToOperateToken, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftMintQuickMintFromMetadataUrlPOST = function nftMintQuickMintFromMetadataUrlPOST (req, res, next, metadataUrl, recipientAddress, allowPlatformToOperateToken, chain) {
  Mint.nftMintQuickMintFromMetadataUrlPOST(metadataUrl, recipientAddress, allowPlatformToOperateToken, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
