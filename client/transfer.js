const ethers = require('ethers');
const {abi} = require('./abi');
const {USER,PASS,RPC_ENDPOINT,WALLET,CONTRACT} = require('./config');

let url = { url: RPC_ENDPOINT, user: USER, password: PASS };
let provider = new ethers.providers.JsonRpcProvider(url);
let wallet = new ethers.Wallet(WALLET,provider);
let contract = new ethers.Contract(CONTRACT, abi, wallet);

let client_amount = ethers.utils.parseEther('0.124');
let client_address = '0xbec9cA2347f199F6490225db921FAB0eB6fD534a';
let total_amount = ethers.utils.parseEther('0.5');
let overrides = {
  value: total_amount,
};

console.log(`Transfering ${total_amount} to smart contract... `);

contract.get_master_wallet_open().then((masterWallet)=>{

  contract.transfer_amount(client_amount,client_address,overrides).then((result)=>{
    console.log(result);
    console.log('Done.')
    console.log(`Client Address: ${client_address} Recieved: ${client_amount} Wei `)
    console.log(`Master Wallet: ${masterWallet} Recieved: ${total_amount - client_amount} Wei `)
  });

});


