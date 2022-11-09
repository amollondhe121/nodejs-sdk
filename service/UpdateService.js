'use strict';


/**
 * Update Collection Contract
 * Update parameters of your collection contract
 *
 * contractAddress String 
 * chain String 
 * tokenURIPrereveal String 
 * allowListMintStartTime String 
 * publicSaleStartTime String 
 * allowlistMintPriceInWei String 
 * publicPriceInWei String 
 * metadataFrozen String 
 * baseTokenURI String 
 * returns inline_response_200_14
 **/
exports.nftDeployUpdateContractPOST = function(contractAddress,chain,tokenURIPrereveal,allowListMintStartTime,publicSaleStartTime,allowlistMintPriceInWei,publicPriceInWei,metadataFrozen,baseTokenURI) {
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
 * Withdraw Funds
 * Withdraw funds from your smart contract.
 *
 * contractAddress String 
 * withdrawAddress String 
 * chain String 
 * returns inline_response_200_14
 **/
exports.nftDeployUpdateWithdrawFundsPOST = function(contractAddress,withdrawAddress,chain) {
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
 * Add addresses to Allowlist
 * Add an address (or group of addresses) to the allowlist of your collection contract.
 *
 * contractAddress String 
 * addresses String 
 * mintSlots String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUpdateAddToAllowListPOST = function(contractAddress,addresses,mintSlots,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Transaction" : [ {
    "blockNumber" : "14554041",
    "timeStamp" : "1649540923",
    "hash" : "0x5b492a277270b4e28f0632b747db44a8650e9092488c9c4d4415ad72a433b382",
    "nonce" : "136",
    "blockHash" : "0x5b5a2faa3e89ef2b58b483086619b30024c0a3ebed7bf744090d278e66e52a08",
    "from" : "0x7d77a304290a422d5c003231ffc1160cb73c60fb",
    "contractAddress" : "0x641f2a0f4dfb439870aada9f0d136d62fd80ad07",
    "to" : "0x4e514d9fcb58503dba5bb2b0f477792c03c8426d",
    "tokenID" : "18",
    "tokenName" : "flymeta",
    "tokenSymbol" : "fm",
    "tokenDecimal" : "0",
    "transactionIndex" : "66",
    "gas" : "265806",
    "gasPrice" : "32084697251",
    "gasUsed" : "199525",
    "cumulativeGasUsed" : "7008966",
    "input" : "deprecated",
    "confirmations" : "264962"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Transfer Contract Operator
 * Transfer the Operator of your deployed collection contract. Works with only collection contracts.
 *
 * contractAddress String 
 * newOperatorAddress String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUpdateTransferOperatorPOST = function(contractAddress,newOperatorAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "Transaction" : [ {
    "blockNumber" : "14554041",
    "timeStamp" : "1649540923",
    "hash" : "0x5b492a277270b4e28f0632b747db44a8650e9092488c9c4d4415ad72a433b382",
    "nonce" : "136",
    "blockHash" : "0x5b5a2faa3e89ef2b58b483086619b30024c0a3ebed7bf744090d278e66e52a08",
    "from" : "0x7d77a304290a422d5c003231ffc1160cb73c60fb",
    "contractAddress" : "0x641f2a0f4dfb439870aada9f0d136d62fd80ad07",
    "to" : "0x4e514d9fcb58503dba5bb2b0f477792c03c8426d",
    "tokenID" : "18",
    "tokenName" : "flymeta",
    "tokenSymbol" : "fm",
    "tokenDecimal" : "0",
    "transactionIndex" : "66",
    "gas" : "265806",
    "gasPrice" : "32084697251",
    "gasUsed" : "199525",
    "cumulativeGasUsed" : "7008966",
    "input" : "deprecated",
    "confirmations" : "264962"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

