'use strict';


/**
 * Mint to a Wallet Address
 * Mint an NFT to a provided address. Works with only collection contracts.
 *
 * mintQty String 
 * contractAddress String 
 * recipientAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftMintCollectionReserveMintPOST = function(mintQty,contractAddress,recipientAddress,chain) {
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
 * Custom Contract NFT Mint from image
 * Mint an NFT from an image file using your created custom contract
 *
 * filePath byte[] 
 * name String 
 * description String 
 * recipientAddress String 
 * contractAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftMintCustomContractMintFromFilePOST = function(filePath,name,description,recipientAddress,contractAddress,chain) {
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
 * Mint Custom contract NFT
 * Mint an NFT from a provided metadata json file URL using your created custom contract
 *
 * metadataUrl String 
 * contractAddress String 
 * recipientAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftMintCustomContractMintFromMetadataUrlPOST = function(metadataUrl,contractAddress,recipientAddress,chain) {
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
 * Quick mint Omnichain NFT from image
 * Mint an Omnichain NFT directly from your specified image file in seconds
 *
 * filePath byte[] 
 * name String 
 * description String 
 * recipientAddress String 
 * allowPlatformToOperateToken String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftMintQuickMintFromFilePOST = function(filePath,name,description,recipientAddress,allowPlatformToOperateToken,chain) {
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
 * Quick mint from Metadata URL
 * Mint an Omnichain NFT directly from a provided metadata file URL
 *
 * metadataUrl String 
 * recipientAddress String 
 * allowPlatformToOperateToken String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftMintQuickMintFromMetadataUrlPOST = function(metadataUrl,recipientAddress,allowPlatformToOperateToken,chain) {
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

