# Etherium Smart Contract Complete Example

Etherium Smart Contract and calling Payable function within it

This Repo has two folders
1- Contract : A simple contract that manages payment shares.
2- Client : a client using etherjs lib to connect to contract and calling its methods

# CONTRACT:

This Smart contract has a master wallet which would be equal to an owner address and defined at the constructor of the contract.
you can get a master wallet address by calling open method o "get_master_wallet_open". I also created a sample secure method of get_master_wallet
which can only be called by the owner.

"TransferAmount" is a main method of the contract which gets two inputs: client address and client amount. The client amount would be subtracted from the total amount you send to the contract and will be sent to a client address.The remaining amount would return to the master wallet which is the owner address.

# NOTES:

You must update all the endpoint , credentials and other necessary variables in config files before running the contract and project.
You may Use Truffle for compiling the smart contract
