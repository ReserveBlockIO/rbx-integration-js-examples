const constants = require("../constants");

const { CLI_BASE_URL } = constants

const retrieveShop = async () => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetDecShop`;
    const request = await fetch(url);

    const data = await request.json();

    if(data['Success'] == true){
        return data["DecShop"];
    }

    return null;

};


module.exports = retrieveShop;

