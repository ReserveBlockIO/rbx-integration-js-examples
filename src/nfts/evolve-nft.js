const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const evolveNft = async (smartContractUid, address, stage) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/EvolveSpecific/${smartContractUid}/${address}/${stage}`;
    const request = await fetch(url);
    
    const data = await request.json();

    return data['Hash'];

};


module.exports = evolveNft;

