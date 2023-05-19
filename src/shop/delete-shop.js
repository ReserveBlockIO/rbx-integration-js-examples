const constants = require("../constants");

const { CLI_BASE_URL } = constants

const deleteShop = async () => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetDeleteLocalDecShop`;
    const request = await fetch(url);

    const data = await request.json();

    return data['Success'] == true;

};


module.exports = deleteShop;

