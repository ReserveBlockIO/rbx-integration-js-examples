const constants = require("../constants");

const { CLI_BASE_URL } = constants

const saveCollection = async (id = 0) => {

    const payload = {
        "Id": id,
        "Name": "My Collection",
        "Description": "My description goes here...",
        "CollectionLive": true,
        "IsDefault": false
    };

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/SaveCollection`;
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await request.json();

    return data['Success'];

};


module.exports = saveCollection;

