const ethers = require('ethers');
const {abi} = require('./abi');
const {USER,PASS,RPC_ENDPOINT,WALLET,CONTRACT} = require('./config');

let url = { url: RPC_ENDPOINT, user: USER, password: PASS };
let provider = new ethers.providers.JsonRpcProvider(url);
let contract = new ethers.Contract(CONTRACT, abi, provider);

console.log('getting master wallet in the contract... ');
contract.get_master_wallet_open().then((result)=>{
  console.log('Master Wallet : ',result);
});
