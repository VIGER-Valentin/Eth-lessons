pragma solidity ^0.4.25;

contract Inbox {
    string public message;

    constructor(string memory intitalMessage) public {
        message = intitalMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}