'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.nftUserOpsAllowListSharesForAddressPOST = function nftUserOpsAllowListSharesForAddressPOST (req, res, next, contractAddress, allowListAddress, chain) {
  User.nftUserOpsAllowListSharesForAddressPOST(contractAddress, allowListAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsContractPaymentDetailsPOST = function nftUserOpsContractPaymentDetailsPOST (req, res, next, contractAddress, payeeAddress, chain) {
  User.nftUserOpsContractPaymentDetailsPOST(contractAddress, payeeAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsDeployedContractsGET = function nftUserOpsDeployedContractsGET (req, res, next) {
  User.nftUserOpsDeployedContractsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsIpfsUploadsGET = function nftUserOpsIpfsUploadsGET (req, res, next) {
  User.nftUserOpsIpfsUploadsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsNftsMintedGET = function nftUserOpsNftsMintedGET (req, res, next) {
  User.nftUserOpsNftsMintedGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsPayeeAtIndexPOST = function nftUserOpsPayeeAtIndexPOST (req, res, next, contractAddress, index, chain) {
  User.nftUserOpsPayeeAtIndexPOST(contractAddress, index, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsTransactionDetailsPOST = function nftUserOpsTransactionDetailsPOST (req, res, next, transactionId) {
  User.nftUserOpsTransactionDetailsPOST(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftUserOpsUserCollectionContractDetailsPOST = function nftUserOpsUserCollectionContractDetailsPOST (req, res, next, contractAddress, chain) {
  User.nftUserOpsUserCollectionContractDetailsPOST(contractAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
