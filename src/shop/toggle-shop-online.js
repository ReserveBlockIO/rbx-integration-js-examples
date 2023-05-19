const constants = require("../constants");

const { CLI_BASE_URL } = constants

const toggleShopOnline = async () => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetSetShopStatus`;
    const request = await fetch(url);

    const data = await request.json();

    console.log(data);

    if(data['Success'] == true){
        return data['Message'].replace("Is Offline? ", "") == "True";
    }

    return null;

};


module.exports = toggleShopOnline;

