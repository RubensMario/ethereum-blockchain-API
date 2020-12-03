const Web3 = require('web3');
const EthVal = require('ethval');

const url = 'https://mainnet.infura.io/v3/8944ccf05a4f41bcb50696e90d0f74a7';
const web3 = new Web3(url);

async function isContract(address) {
  const adressData = await web3.eth.getCode(address);

  const isContractAdress = adressData !== '0x';

  console.log(isContractAdress);
}

async function addressBalance(address) {
  const balance = await web3.eth.getBalance(address);

  console.log(balance);
}

addressBalance(
  '0xc2669ad08fe09d39cf6a0a4502bb7e1581387cc6dc54bfb6ebdeafdf8122401f'
);

async function addressTransactionsCount(address) {
  const transactionsCount = await web3.eth.getTransactionCount(address);

  console.log(transactionsCount);
}

// addressTransactionsCount('0xd26114cd6ee289accf82350c8d8487fedb8a0c07');

async function transactionDetails(txId) {
  const transactionData = await web3.eth.getTransaction(txId);

  const transactionValueInEth = new EthVal(transactionData.value).toEth();

  const input = transactionData.input;

  // const isHexString = await web3.utils.isHex(input);

  const decodedInput = await web3.utils.hexToNumberString(input);

  console.log(transactionData);
  console.log('in eth: ' + transactionValueInEth);
  // console.log(decodedInput);
}
// transactionDetails(
//   '0xc2669ad08fe09d39cf6a0a4502bb7e1581387cc6dc54bfb6ebdeafdf8122401f'
// );

async function transactionReceipt(hash) {
  const receipt = await web3.eth.getTransactionReceipt(hash);

  console.log(receipt);
}
// transactionReceipt(
//   '0xc2669ad08fe09d39cf6a0a4502bb7e1581387cc6dc54bfb6ebdeafdf8122401f'
// );

// blockIdentifier: block hash ou block number
async function blockDetails(blockIdentifier) {
  const blockData = await web3.eth.getBlock(blockIdentifier);

  console.log(blockData);
}
// blockDetails(11238270);
