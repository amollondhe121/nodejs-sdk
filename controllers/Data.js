'use strict';

var utils = require('../utils/writer.js');
var Data = require('../service/DataService');

module.exports.nftDataAttributesForContractAddressGET = function nftDataAttributesForContractAddressGET (req, res, next, contractAddress, chain, limit, page, sortField, sortDirection) {
  Data.nftDataAttributesForContractAddressGET(contractAddress, chain, limit, page, sortField, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataAttributesForSlugGET = function nftDataAttributesForSlugGET (req, res, next, slug, chain, limit, page, sortField, sortDirection) {
  Data.nftDataAttributesForSlugGET(slug, chain, limit, page, sortField, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataAttributesWithTokensForContractAddressGET = function nftDataAttributesWithTokensForContractAddressGET (req, res, next, contractAddress, chain, limit, page, sortField, sortDirection) {
  Data.nftDataAttributesWithTokensForContractAddressGET(contractAddress, chain, limit, page, sortField, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataAttributesWithTokensForSlugGET = function nftDataAttributesWithTokensForSlugGET (req, res, next, slug, chain, limit, page, sortField, sortDirection) {
  Data.nftDataAttributesWithTokensForSlugGET(slug, chain, limit, page, sortField, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataCollectionsAllGET = function nftDataCollectionsAllGET (req, res, next, chain, limit, page, sortField, sortInterval, sortDirection) {
  Data.nftDataCollectionsAllGET(chain, limit, page, sortField, sortInterval, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataCollectionsSearchGET = function nftDataCollectionsSearchGET (req, res, next, searchString, chain, limit, page, sortField, sortInterval, sortDirection) {
  Data.nftDataCollectionsSearchGET(searchString, chain, limit, page, sortField, sortInterval, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataCreatedGET = function nftDataCreatedGET (req, res, next, walletAddress, chain) {
  Data.nftDataCreatedGET(walletAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataFloorPricesForContractAddressGET = function nftDataFloorPricesForContractAddressGET (req, res, next, contractAddress, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataFloorPricesForContractAddressGET(contractAddress, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataFloorPricesForSlugGET = function nftDataFloorPricesForSlugGET (req, res, next, slug, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataFloorPricesForSlugGET(slug, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataHistoricalStatsForContractAddressGET = function nftDataHistoricalStatsForContractAddressGET (req, res, next, contractAddress, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataHistoricalStatsForContractAddressGET(contractAddress, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataHistoricalStatsForSlugGET = function nftDataHistoricalStatsForSlugGET (req, res, next, slug, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataHistoricalStatsForSlugGET(slug, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataLastFloorPriceForContractAddressGET = function nftDataLastFloorPriceForContractAddressGET (req, res, next, contractAddress, chain) {
  Data.nftDataLastFloorPriceForContractAddressGET(contractAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataLastFloorPriceForSlugGET = function nftDataLastFloorPriceForSlugGET (req, res, next, slug, chain) {
  Data.nftDataLastFloorPriceForSlugGET(slug, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataNftDetailsGET = function nftDataNftDetailsGET (req, res, next, contractAddress, tokenId, chain) {
  Data.nftDataNftDetailsGET(contractAddress, tokenId, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataOwnedGET = function nftDataOwnedGET (req, res, next, walletAddress, chain) {
  Data.nftDataOwnedGET(walletAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataOwnershipForContractAddressGET = function nftDataOwnershipForContractAddressGET (req, res, next, contractAddress, chain, limit, page, sortDirection) {
  Data.nftDataOwnershipForContractAddressGET(contractAddress, chain, limit, page, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataOwnershipForSlugGET = function nftDataOwnershipForSlugGET (req, res, next, slug, chain, limit, page, sortDirection) {
  Data.nftDataOwnershipForSlugGET(slug, chain, limit, page, sortDirection)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataSalesEventsForContractAddressGET = function nftDataSalesEventsForContractAddressGET (req, res, next, contractAddress, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataSalesEventsForContractAddressGET(contractAddress, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataSalesEventsForSlugGET = function nftDataSalesEventsForSlugGET (req, res, next, slug, chain, limit, offset, sortDirection, startDate, endDate) {
  Data.nftDataSalesEventsForSlugGET(slug, chain, limit, offset, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataSearchAttributesInContractAddressGET = function nftDataSearchAttributesInContractAddressGET (req, res, next, searchString, contractAddress, chain, limit, page, sortField, sortDirection, includeTokens) {
  Data.nftDataSearchAttributesInContractAddressGET(searchString, contractAddress, chain, limit, page, sortField, sortDirection, includeTokens)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataSearchAttributesInSlugGET = function nftDataSearchAttributesInSlugGET (req, res, next, searchString, slug, chain, limit, page, sortField, sortDirection, includeTokens) {
  Data.nftDataSearchAttributesInSlugGET(searchString, slug, chain, limit, page, sortField, sortDirection, includeTokens)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataTransactionsByContractGET = function nftDataTransactionsByContractGET (req, res, next, contractAddress, walletAddress, chain) {
  Data.nftDataTransactionsByContractGET(contractAddress, walletAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataTransactionsGET = function nftDataTransactionsGET (req, res, next, walletAddress, chain) {
  Data.nftDataTransactionsGET(walletAddress, chain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataTransferEventsForContractAddressGET = function nftDataTransferEventsForContractAddressGET (req, res, next, contractAddress, chain, limit, page, sortDirection, startDate, endDate) {
  Data.nftDataTransferEventsForContractAddressGET(contractAddress, chain, limit, page, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftDataTransferEventsForSlugGET = function nftDataTransferEventsForSlugGET (req, res, next, slug, chain, limit, page, sortDirection, startDate, endDate) {
  Data.nftDataTransferEventsForSlugGET(slug, chain, limit, page, sortDirection, startDate, endDate)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
