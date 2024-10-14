export const forgeContractAddress = '0xa9CB58C36D45Ec572D141EFBDC3CB5183a905e83';

export const forgeContractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "tokensContract",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "NonForgeableTokenId",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "forge",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tokenContract",
    "outputs": [
      {
        "internalType": "contract IMyERC1155Token",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];