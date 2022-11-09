'use strict';


/**
 * Upload a file via URL to IPFS
 * Uploads a file to IPFS from a provided url. A quick and seamless way to store a file in IPFS. This does not create a metadata json file that can be used as an NFT metadata.
 *
 * fileUrl String 
 * returns inline_response_201_1
 **/
exports.nftStoreFileFromUrlPOST = function(fileUrl) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ipfs_storage" : {
    "ipfs_url" : "https://ipfs.io/ipfs/bafkreifsrskljjuyyk4r3jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee"
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
 * Upload a local file to IPFS
 * Uploads a local file directly to IPFS. A quick and seamless way to store a file in IPFS. This does not create a metadata json file that can be used as an NFT metadata.
 *
 * filePath byte[] 
 * returns inline_response_201
 **/
exports.nftStoreFilePOST = function(filePath) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ipfs_storage" : {
    "ipfs_url" : "https://ipfs.io/ipfs/bakiuifsrsklegk4r3jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee"
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
 * Upload local file as metadata to IPFS
 * Creates a metadata json file from the provided local file, and uploads the metadata file directly to IPFS, all in one operation.
 *
 * filePath byte[] 
 * name String 
 * description String 
 * returns inline_response_201_3
 **/
exports.nftStoreMetadataFromImagePOST = function(filePath,name,description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ipfs_storage" : {
    "name" : "TestName",
    "description" : "This is a description",
    "metadata_url" : "https://ipfs.io/ipfs/bafkreifsrsklegk4r3jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee/metadata.json",
    "ipfs_url" : "https://ipfs.io/ipfs/bafybeibvurpadg33lglxevutbizjj2lhwi5i6t3gz3tfuiijfrthim4q74/943.png"
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
 * Upload a URL to IPFS as NFT metadata
 * Creates a metadata json file from the provided URL and uploads the metadata file direcly to IPFS, all in one operation.
 *
 * fileUrl String 
 * name String 
 * description String 
 * returns inline_response_201_2
 **/
exports.nftStoreMetadataFromImageUrlPOST = function(fileUrl,name,description) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ipfs_storage" : {
    "name" : "Test Name",
    "description" : "This is a description",
    "metadata_url" : "https://ipfs.io/ipfs/bafkreijibsklegk4r3jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee/metadata.json",
    "ipfs_url" : "https://ipfs.io/ipfs/bafybeibvurpouwg33lglxevutbizjj2lhwi5i6t3gz3tfuiijfrthim4q74/943.png"
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
 * Upload a directory to IPFS
 * Uploads a directory of metadata json files to IPFS. Useful for creating nft collections. The files in your directory should be numbered, example &#58; 1.json, 2.json, 3.json. You will need to upload all the files together at once. The uploaded files to IPFS will all be in the same IPFS directory. Once uploaded to IPFS the file extensions (.json) will be removed. Example &#58; file \"1.json\" will show up as \"1\" in the IPFS directory
 *
 * filePath byte[] 
 * returns inline_response_201_4
 **/
exports.nftStoreUploadDirectoryPOST = function(filePath) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ipfs_storage" : {
    "name" : "Test Name",
    "description" : "This is a description",
    "metadata_url" : "https://ipfs.io/ipfs/bafkreifsrskleg5f53jft4fucwvo4pzzwczjecsfg5qrjgp2arevnel2ee/metadata.json",
    "ipfs_url" : "https://ipfs.io/ipfs/bafyj8rpadg33lglxevutbizjj2lhwi5i6t3gz3tfuiijfrthim4q74/943.png"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

