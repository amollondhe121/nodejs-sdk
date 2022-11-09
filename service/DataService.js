'use strict';


/**
 * Get attributes for contract address
 * Returns all metadata attributes for an NFT contract address
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_12
 **/
exports.nftDataAttributesForContractAddressGET = function(contractAddress,chain,limit,page,sortField,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get attributes for slug
 * Returns all metadata attributes for a particular NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_12
 **/
exports.nftDataAttributesForSlugGET = function(slug,chain,limit,page,sortField,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get attributes (with tokens) for contract address
 * Returns all metadata attributes and corresponding token IDs for an NFT contract address
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_13
 **/
exports.nftDataAttributesWithTokensForContractAddressGET = function(contractAddress,chain,limit,page,sortField,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get attributes (with tokens) for slug
 * Returns all metadata attributes and corresponding token IDs for a particular NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_13
 **/
exports.nftDataAttributesWithTokensForSlugGET = function(slug,chain,limit,page,sortField,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get all indexed collections
 * Returns all collections indexed by Verbwire
 *
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String Field to sort by (optional)
 * sortInterval String Interval to sort by (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_11
 **/
exports.nftDataCollectionsAllGET = function(chain,limit,page,sortField,sortInterval,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Search all indexed collections
 * Searches all collections indexed by Verbwire for a given string
 *
 * searchString String Search value
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String Field to sort by (optional)
 * sortInterval String Interval to sort by (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_11
 **/
exports.nftDataCollectionsSearchGET = function(searchString,chain,limit,page,sortField,sortInterval,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "collections" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get all NFTs created by a wallet address
 * Returns a list of all NFTs created by a particular wallet address
 *
 * walletAddress String Wallet address to query
 * chain String Blockchain to search (optional)
 * returns inline_response_200
 **/
exports.nftDataCreatedGET = function(walletAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nfts" : [ {
    "contractAddress" : "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "tokenID" : 40,
    "tokenName" : "Azuki"
  }, {
    "contractAddress" : "0x23581767a106ae21c074b2276d25e5c3e136a68b",
    "tokenID" : 6504,
    "tokenName" : "Moonbirds"
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
 * Get floor prices for contract address
 * Returns all floor price history for an NFT project
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_5
 **/
exports.nftDataFloorPricesForContractAddressGET = function(contractAddress,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "floorPrices" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get floor prices for slug
 * Returns all floor price history for an NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_5
 **/
exports.nftDataFloorPricesForSlugGET = function(slug,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "floorPrices" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get historical stats for contract address
 * Returns historical statistics for an NFT project
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_6
 **/
exports.nftDataHistoricalStatsForContractAddressGET = function(contractAddress,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "historicalStats" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get historical stats for slug
 * Returns historical statistics for an NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_6
 **/
exports.nftDataHistoricalStatsForSlugGET = function(slug,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "historicalStats" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get last floor price for contract address
 * Returns the most recent floor price for an NFT
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * returns inline_response_200_4
 **/
exports.nftDataLastFloorPriceForContractAddressGET = function(contractAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "floorPrices" : {
    "source" : "X2Y2",
    "eventType" : "floorPriceChangeEvent",
    "kind" : "cancel",
    "slug" : "boredapeyachtclub",
    "chain" : "ethereum",
    "floorAsk" : 79,
    "previousFloorAsk" : 78.8,
    "contractId" : "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "timestamp" : "2022-09-26T07:33:26.000Z"
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
 * Get last floor price for slug
 * Returns the most recent floor price for an NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * returns inline_response_200_4
 **/
exports.nftDataLastFloorPriceForSlugGET = function(slug,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "floorPrices" : {
    "source" : "X2Y2",
    "eventType" : "floorPriceChangeEvent",
    "kind" : "cancel",
    "slug" : "boredapeyachtclub",
    "chain" : "ethereum",
    "floorAsk" : 79,
    "previousFloorAsk" : 78.8,
    "contractId" : "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "timestamp" : "2022-09-26T07:33:26.000Z"
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
 * Get details for an NFT
 * Returns all details for an NFT
 *
 * contractAddress String NFT contract address
 * tokenId String NFT Token ID
 * chain String Blockchain to search (optional)
 * returns inline_response_200_3
 **/
exports.nftDataNftDetailsGET = function(contractAddress,tokenId,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nft_details" : {
    "name" : "Azuki",
    "symbol" : "AZUKI",
    "tokenId" : 40,
    "owner" : "0x333e58f8d77a8add1032CfdD781383E934f92d6F",
    "tokenURI" : "https://ikzttp.mypinata.cloud/ipfs/QmQFkLSQysj94s5GvTHPyzTxrawwtjgiiYS2TBLgrvw8CW/40"
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
 * Get all NFTs owned by a wallet address
 * Returns a list of all NFTs held within a particular wallet address
 *
 * walletAddress String Wallet address to query
 * chain String Blockchain to search (optional)
 * returns inline_response_200
 **/
exports.nftDataOwnedGET = function(walletAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nfts" : [ {
    "contractAddress" : "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "tokenID" : 40,
    "tokenName" : "Azuki"
  }, {
    "contractAddress" : "0x23581767a106ae21c074b2276d25e5c3e136a68b",
    "tokenID" : 6504,
    "tokenName" : "Moonbirds"
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
 * Get ownership data for contract address
 * Returns all wallets that owna particular NFT project slug
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_10
 **/
exports.nftDataOwnershipForContractAddressGET = function(contractAddress,chain,limit,page,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transfers" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get ownership data for slug
 * Returns all wallets that own a particular NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * returns inline_response_200_10
 **/
exports.nftDataOwnershipForSlugGET = function(slug,chain,limit,page,sortDirection) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transfers" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get sales events for contract address
 * Returns all sales events for a particular NFT project slug
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_7
 **/
exports.nftDataSalesEventsForContractAddressGET = function(contractAddress,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sales" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get sales events for slug
 * Returns all sales events for a particular NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * offset BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_7
 **/
exports.nftDataSalesEventsForSlugGET = function(slug,chain,limit,offset,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "sales" : [ "", "" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search attributes in contract address
 * Returns all metadata attributes for an NFT contract address
 *
 * searchString String Expression to search in NFT attributes
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * includeTokens Boolean Include the corresponding token IDs in search results (optional)
 * returns inline_response_200_12
 **/
exports.nftDataSearchAttributesInContractAddressGET = function(searchString,contractAddress,chain,limit,page,sortField,sortDirection,includeTokens) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Search attributes in slug
 * Returns all metadata attributes for a particular NFT project slug
 *
 * searchString String Expression to search in NFT attributes
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortField String  (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * includeTokens Boolean Include the corresponding token IDs in search results (optional)
 * returns inline_response_200_12
 **/
exports.nftDataSearchAttributesInSlugGET = function(searchString,slug,chain,limit,page,sortField,sortDirection,includeTokens) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "attributes" : {
    "totalResults" : 168,
    "limit" : 500,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get all NFTs Contract transactions by a wallet address
 * Produce a list of all NFTs transactions for a specific NFT contract within a particular wallet address
 *
 * contractAddress String NFT contract address
 * walletAddress String Wallet address to query
 * chain String Blockchain to search (optional)
 * returns inline_response_200_2
 **/
exports.nftDataTransactionsByContractGET = function(contractAddress,walletAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contract_transactions" : [ {
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
 * Get all transactions by a wallet address
 * Returns a list of all transactions by a particular wallet address
 *
 * walletAddress String Wallet address to query
 * chain String Blockchain to search (optional)
 * returns inline_response_200_1
 **/
exports.nftDataTransactionsGET = function(walletAddress,chain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "nft_transactions" : [ {
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
 * Get transfer events for contract address
 * Returns all transfer events for a particular NFT project slug
 *
 * contractAddress String NFT contract address
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_9
 **/
exports.nftDataTransferEventsForContractAddressGET = function(contractAddress,chain,limit,page,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transfers" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
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
 * Get transfer events for slug
 * Returns all transfer events for a particular NFT project slug
 *
 * slug String NFT project slug
 * chain String Blockchain to search (optional)
 * limit BigDecimal Number of results to return (optional)
 * page BigDecimal Used to return the next set of items (optional)
 * sortDirection String Timestamp sort direction for the return results (optional)
 * startDate String Starting timestamp for results (optional)
 * endDate String Ending timestamp for results (optional)
 * returns inline_response_200_8
 **/
exports.nftDataTransferEventsForSlugGET = function(slug,chain,limit,page,sortDirection,startDate,endDate) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "transfers" : {
    "totalResults" : 31,
    "limit" : 50,
    "totalPages" : 1,
    "page" : 1,
    "results" : [ "", "" ]
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

