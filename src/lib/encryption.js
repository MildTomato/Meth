/**
 * Handles encryption and decryption using Web3.js implementation
 */

const MOCK_TIME = 2000;

// This is a mock function to emulate the actual decryption process
export const decryptMock = (hash, privateKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true)
    }, MOCK_TIME);
  })
}

// This is a mock function to emulate the actual encryption process
export const encryptMock = (data, publicKey) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true)
    }, MOCK_TIME);
  })
}

// This is a mock function to emulate the uploading of a new encrypted file to IPFS
export const uploadMock = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true)
    }, MOCK_TIME);
  })
}

// Hashes an image
export const hashMock = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(true)
    }, MOCK_TIME);
  })
}

// This is a mock function to emulate verification of an unencrypted hash against another
export const verifyMock = (originalHash, newHash) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve((originalHash === newHash))
    }, MOCK_TIME);
  })
}