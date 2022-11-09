'use strict';


/**
 * Burn NFT
 * Burn an NFT. You can burn only NFTs created from your own collection contract.
 *
 * contractAddress String 
 * tokenId String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftDeployBurnPOST = function(contractAddress,tokenId,chain) {
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

