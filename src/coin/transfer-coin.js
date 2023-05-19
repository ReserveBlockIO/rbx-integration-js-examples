const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const transferCoin = async (fromAddress, toAddress, amount) => {

    const url = `${CLI_BASE_URL}/txapi/TXV1/SendTransaction/${fromAddress}/${toAddress}/${amount}`;
    const request = await fetch(url);
    
    const data = await request.text();

    if(data.includes("Success! TxId: ")){
        return data.replace("Success! TxId: ", "");
    }
    return null;

};


module.exports = transferCoin;

