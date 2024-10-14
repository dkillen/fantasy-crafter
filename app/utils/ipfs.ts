export const convertIpfsUrlToHttp = (ipfsUrl: string) => {
  // Convert IPFS to an HTTP URL via public IPFS gateway
  return ipfsUrl.replace('ipfs://', 'https://ipfs.io/ipfs/');
};