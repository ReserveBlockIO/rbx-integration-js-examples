const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const retrieveNft = async (smartContractUid) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/GetSingleSmartContract/${smartContractUid}`;
    const request = await fetch(url);

    const data = await request.json();
    if(data.length < 1) return null; 
    return data[0];

};


module.exports = retrieveNft;

