const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const burnNft = async (smartContractUid) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/Burn/${smartContractUid}`;
    const request = await fetch(url);
    
    const data = await request.json();

    return data["Hash"];

};


module.exports = burnNft;

