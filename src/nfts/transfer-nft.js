const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const transferNft = async (smartContractUid, address) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/TransferNFT/${smartContractUid}/${address}`;
    const request = await fetch(url);
    
    const data = await request.json();
    return data['Result'] == "Success";

};


module.exports = transferNft;

