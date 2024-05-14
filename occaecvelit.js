// Import Web3 module
const Web3 = require('web3');

// Create a new web3 instance with the provided RPC endpoint
const web3 = new Web3('HTTPS://rpc.ankr.com/bsc/');

// Function to perform operations
async function performOperations() {
  try {
    // Get the current block number
    const blockNumber = await web3.eth.getBlockNumber();
    console.log(`Current block number: ${blockNumber}`);

    // Send a transaction to a smart contract
    const tx = await web3.eth.sendTransaction({
      from: '0xYourAddress', // Replace with your address
      to: '0xReceiverAddress', // Replace with the receiver's address
      value: web3.utils.toWei('1', 'ether'), // Converts 1 ether to Wei
      data: '0xYourData', // Replace with your data
    });

    console.log(`Transaction successful with hash: ${tx.transactionHash}`);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Call the function
performOperations();
