const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'mnemonic needed',
    'https://rinkeby.infura.io/v3/12658a3bd98b410483b8cd44328533d0'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.log('contract deployed to', result.options.address);
};
deploy();