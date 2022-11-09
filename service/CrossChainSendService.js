'use strict';


/**
 * Send your NFT across Chains
 * Sends an NFT (minted from your created custom contract) from one block chain to another. Sending NFTs accross chains is a unique feature of Omnichain NFTs
 *
 * sourceChain String 
 * destChain String 
 * tokenId String 
 * sourceWalletAddress String 
 * recipientWalletAddress String 
 * returns inline_response_200_14
 **/
exports.nftSendCrossChainSendPOST = function(sourceChain,destChain,tokenId,sourceWalletAddress,recipientWalletAddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction_details" : {
    "transactionID" : "6327921e418fb0564c4d063b",
    "status" : "Sent"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Enable Cross-chain Sends
 * Turn on the ability to send your NFT (minted with your created custom contract) across chains
 *
 * sourceChain String 
 * destChain String 
 * sourceContractAddress String 
 * destContractAddress String 
 * returns inline_response_200_14
 **/
exports.nftSendEnableCrossChainSendPOST = function(sourceChain,destChain,sourceContractAddress,destContractAddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction_details" : {
    "transactionID" : "6327921e418fb0564c4d063b",
    "status" : "Sent"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send Quick-minted NFT across Chains
 * Sends a quick-minted NFT from one block chain to another. Sending NFTs accross chains is a unique feature of Omnichain NFTs
 *
 * sourceChain String 
 * destChain String 
 * tokenId String 
 * sourceWalletAddress String 
 * recipientWalletAddress String 
 * returns inline_response_200_14
 **/
exports.nftSendQuickSendPOST = function(sourceChain,destChain,tokenId,sourceWalletAddress,recipientWalletAddress) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transaction_details" : {
    "transactionID" : "6327921e418fb0564c4d063b",
    "status" : "Sent"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

