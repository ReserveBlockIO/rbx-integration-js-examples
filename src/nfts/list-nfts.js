const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const listNfts = async (page = 1) => {

    const url = `${CLI_BASE_URL}/scapi/scv1/GetAllSmartContracts/${page}`;
    const request = await fetch(url);

    const data = await request.json();

    if(!data){
        return null;
    }

    if(data['Count'] == 0){
        console.log("No NFTs found");
        return [];
    }
    
    return data['Results'];
    
};


module.exports = listNfts;

