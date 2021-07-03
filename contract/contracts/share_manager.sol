pragma solidity >=0.8.0;

contract share_manager {
    address public owner;
    address public master_wallet;

    modifier restricted() {
        require(
            msg.sender == owner,
            "This function is restricted to the contract's owner"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
        master_wallet = msg.sender;
    }

    function get_master_wallet() public view restricted returns (address) {
        return master_wallet;
    }

    function get_master_wallet_open() public view returns (address) {
        return master_wallet;
    }

    function get_sender_wallet() public view returns (address) {
        return msg.sender;
    }

    function set_master_wallet(address new_master_wallet)
        public
        restricted
        returns (address)
    {
        master_wallet = new_master_wallet;
        return new_master_wallet;
    }

    function transfer_amount(uint256 client_amount, address client_address)
        public
        payable
        returns (uint256)
    {
        uint256 total_amount = msg.value;
        if (total_amount < client_amount) revert();

        uint256 remain_amount = total_amount - client_amount;
        payable(client_address).transfer(client_amount);
        payable(master_wallet).transfer(remain_amount);
        return remain_amount;
    }
}
