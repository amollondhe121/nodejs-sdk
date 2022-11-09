'use strict';


/**
 * Deploy a Collection Contract
 * Deploy a collection contract in seconds. You can deploy any of the provided three types of contracts (i) A standard ERC721 collection contract (ii) An ERC721A collection contract (iii) An Omnichain ERC721 contract. Note, an Omni chain contract gives you the the ability to send your NFTs across different blockchains
 *
 * contractName String 
 * contractSymbol String 
 * recipientAddress String 
 * chain String 
 * contractType String 
 * returns inline_response_200_14
 **/
exports.nftDeployDeployCollectionContractPOST = function(contractName,contractSymbol,recipientAddress,chain,contractType) {
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
 * Deploy a Custom Contract
 * Deploy a custom omnichain contract in seconds. A custom contract is different from a collection contract. Use a custom contract for providing NFT functionality in your applications.
 *
 * contractName String 
 * contractSymbol String 
 * recipientAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftDeployDeployCustomContractPOST = function(contractName,contractSymbol,recipientAddress,chain) {
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
 * Initialize your collection contract
 * Set the parameters of your deployed collection contract
 *
 * contractAddress String 
 * maxMintPerAddress String 
 * totalReserveQty String 
 * totalAllowlistQty String 
 * maxSupply String 
 * maxMintableBatchSize String 
 * royaltiesInBps String 
 * royaltiesAddress String 
 * ownerAddress String 
 * tokenURIPrereveal String 
 * baseTokenURI String 
 * allowListMintStartTime String 
 * publicSaleStartTime String 
 * allowlistMintPriceInWei String 
 * publicPriceInWei String 
 * metadataFrozen String 
 * recipientAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftUpdateInitCollectionContractPOST = function(contractAddress,maxMintPerAddress,totalReserveQty,totalAllowlistQty,maxSupply,maxMintableBatchSize,royaltiesInBps,royaltiesAddress,ownerAddress,tokenURIPrereveal,baseTokenURI,allowListMintStartTime,publicSaleStartTime,allowlistMintPriceInWei,publicPriceInWei,metadataFrozen,recipientAddress,chain) {
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

