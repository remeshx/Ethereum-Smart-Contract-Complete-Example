const ethers = require('ethers');
const {abi} = require('./abi');
const {USER,PASS,RPC_ENDPOINT,WALLET,CONTRACT} = require('./config');

let url = { url: RPC_ENDPOINT, user: USER, password: PASS };
let provider = new ethers.providers.JsonRpcProvider(url);
let wallet = new ethers.Wallet(WALLET,provider);
let contract = new ethers.Contract(CONTRACT, abi, wallet);

console.log('Updating master wallet in the contract... ');
contract.set_master_wallet('0x1327755B3D6d97bF4a7Cc99ccf548AAe2B828939').then((result)=>{
    console.log('Done. Result :' ,result);
    console.log('Wait for blocks to mined before fetching master wallet.');
});
