/**
 * Handles encryption and decryption using Web3.js implementation
 */

const MOCK_TIME = 3000;

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