const constants = require("../constants");

const { CLI_BASE_URL } = constants

const createShop = async () => {

    const payload = {
        "Name": "Shop Name",
        "DecShopURL": "tutorial-shop",
        "Description": "My shop's description...",
        "OwnerAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
        "DecShopHostingType": 0,
        "AutoUpdateNetworkDNS": true,
    };

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveDecShop`;
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await request.json();


    return data['Success'];


};


module.exports = createShop;

