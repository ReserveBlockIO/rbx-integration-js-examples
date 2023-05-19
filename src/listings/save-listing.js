const constants = require("../constants");

const { CLI_BASE_URL } = constants

const saveListing = async (collectionId, listingId = 0) => {

    const payload = {
        "Id": listingId,
        "CollectionId": collectionId,
        "SmartContractUID": "a9dda3fd088d4d72a35380957b3a3742:1684502628",
        "AddressOwner": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59",
        "BuyNowPrice": 10,
        "IsBuyNowOnly": false,
        "RequireBalanceCheck": true,
        "FloorPrice": 25,
        "ReservePrice": 30,
        "StartDate": "2023-05-01T00:00:00.000Z",
        "EndDate": "2023-06-01T00:00:00.000Z"
    };

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveListing`;
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await request.json();

    return data['Success'];

};


module.exports = saveListing;

