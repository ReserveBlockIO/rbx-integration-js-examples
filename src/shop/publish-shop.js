const constants = require("../constants");

const { CLI_BASE_URL } = constants

const publishShop = async () => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetPublishDecShop`;
    const request = await fetch(url);

    const data = await request.json();

    console.log(data);

    return data['Success'];

};


module.exports = publishShop;

