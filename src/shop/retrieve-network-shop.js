const constants = require("../constants");

const { CLI_BASE_URL } = constants

const retrieveNetworkShop = async (shopUrl) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetNetworkDecShopInfo/${shopUrl}`;
    const request = await fetch(url);

    const data = await request.json();

    if(data['Success'] == true){
        return data["DecShop"];
    }

    return null;

};


module.exports = retrieveNetworkShop;

