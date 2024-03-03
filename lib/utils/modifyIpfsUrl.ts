export function convertIpfsUrl(url) {
  if (url.startsWith("ipfs://")) {
    return `https://ipfs.infura.io/ipfs/${url.substring(7)}`;
  }
  return url;
}
