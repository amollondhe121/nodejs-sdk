'use strict';

var utils = require('../utils/writer.js');
var Store = require('../service/StoreService');

module.exports.nftStoreFileFromUrlPOST = function nftStoreFileFromUrlPOST (req, res, next, fileUrl) {
  Store.nftStoreFileFromUrlPOST(fileUrl)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftStoreFilePOST = function nftStoreFilePOST (req, res, next, filePath) {
  Store.nftStoreFilePOST(filePath)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftStoreMetadataFromImagePOST = function nftStoreMetadataFromImagePOST (req, res, next, filePath, name, description) {
  Store.nftStoreMetadataFromImagePOST(filePath, name, description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftStoreMetadataFromImageUrlPOST = function nftStoreMetadataFromImageUrlPOST (req, res, next, fileUrl, name, description) {
  Store.nftStoreMetadataFromImageUrlPOST(fileUrl, name, description)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nftStoreUploadDirectoryPOST = function nftStoreUploadDirectoryPOST (req, res, next, filePath) {
  Store.nftStoreUploadDirectoryPOST(filePath)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
