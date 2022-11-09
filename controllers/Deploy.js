'use strict';

var utils = require('../utils/writer.js');
var Deploy = require('../service/DeployService');

module.exports.nftDeployDeployCollectionContractPOST = function nftDeployDeployCollectionContractPOST (req, res, next, contractName, contractSymbol, recipientAddress, chain, contractType) {
  Deploy.nftDeployDeployCollectionContractPOST(contractName, contractSymbol, recipientAddress, chain, contractType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDeployDeployCustomContractPOST = function nftDeployDeployCustomContractPOST (req, res, next, contractName, contractSymbol, recipientAddress, chain) {
  Deploy.nftDeployDeployCustomContractPOST(contractName, contractSymbol, recipientAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUpdateInitCollectionContractPOST = function nftUpdateInitCollectionContractPOST (req, res, next, contractAddress, maxMintPerAddress, totalReserveQty, totalAllowlistQty, maxSupply, maxMintableBatchSize, royaltiesInBps, royaltiesAddress, ownerAddress, tokenURIPrereveal, baseTokenURI, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, recipientAddress, chain) {
  Deploy.nftUpdateInitCollectionContractPOST(contractAddress, maxMintPerAddress, totalReserveQty, totalAllowlistQty, maxSupply, maxMintableBatchSize, royaltiesInBps, royaltiesAddress, ownerAddress, tokenURIPrereveal, baseTokenURI, allowListMintStartTime, publicSaleStartTime, allowlistMintPriceInWei, publicPriceInWei, metadataFrozen, recipientAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
