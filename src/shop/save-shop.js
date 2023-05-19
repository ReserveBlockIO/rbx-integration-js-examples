const constants = require("../constants");

const { CLI_BASE_URL } = constants

const saveShop = async () => {

    const payload = {
        "Name": "Updated Shop Name",
        "DecShopURL": "tutorial-shop",
        "Description": "My updated shop's description...",
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


module.exports = saveShop;

