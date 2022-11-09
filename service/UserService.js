'use strict';


/**
 * Get Allowlist Shares
 * Display Allowlist shares for a specific address.
 *
 * contractAddress String 
 * allowListAddress String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUserOpsAllowListSharesForAddressPOST = function(contractAddress,allowListAddress,chain) {
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
 * Get Payee Payment Details
 * Display payment details for a specific payee of a contract.
 *
 * contractAddress String 
 * payeeAddress String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUserOpsContractPaymentDetailsPOST = function(contractAddress,payeeAddress,chain) {
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
 * Retrieve deployed contracts
 * Produce a list of all your deployed contracts
 *
 * returns inline_response_200_15
 **/
exports.nftUserOpsDeployedContractsGET = function() {
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
 * Retrieve your uploaded IPFS files
 * Produce a list of all your minted NFTs
 *
 * returns inline_response_200_15
 **/
exports.nftUserOpsIpfsUploadsGET = function() {
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
 * Retrieve your minted NFTs
 * Produce a list of all your minted NFTs
 *
 * returns inline_response_200_15
 **/
exports.nftUserOpsNftsMintedGET = function() {
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
 * Get Payee
 * Display details of Payee at a certain Index.
 *
 * contractAddress String 
 * index String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUserOpsPayeeAtIndexPOST = function(contractAddress,index,chain) {
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
 * Retrieve specific transaction details
 * Get details for a specific transaction
 *
 * transactionId String 
 * returns inline_response_200_15
 **/
exports.nftUserOpsTransactionDetailsPOST = function(transactionId) {
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
 * Get Contract Details
 * Display details of your collection contract.
 *
 * contractAddress String 
 * chain String 
 * returns inline_response_200_15
 **/
exports.nftUserOpsUserCollectionContractDetailsPOST = function(contractAddress,chain) {
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

