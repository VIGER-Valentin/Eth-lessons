import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.enable();

  const newProv = window.web3.currentProvider;

  web3 = new Web3(newProv);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/12658a3bd98b410483b8cd44328533d0'
  );
  web3 = new Web3(provider);
}

export default web3;