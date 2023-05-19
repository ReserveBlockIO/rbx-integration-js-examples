const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const mintNft = async (smartContractUid) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/MintSmartContract/${smartContractUid}`;
    const request = await fetch(url);

    const data = await request.text();
    if(data == "Smart contract has been published to mempool"){
        return true;
    }

    return false;
    
};


module.exports = mintNft;

