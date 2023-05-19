const constants = require("../constants");

const { CLI_BASE_URL } = constants

const compileNft = async () => {

    const payload = {
        "Name": "Smart Contract Name",
        "MinterName": "Minter's Name",
        "Description": "Description Goes Here",
        "SmartContractAsset": {
            "AssetId": "00000000-0000-0000-0000-000000000000",
            "Name": "friendship.jpg",
            "AssetAuthorName": "Author's Name",
            "Location": "/Users/tylersavery/placeholders/friendship.jpg",
            "Extension": "jpg",
            "FileSize": 488734,
        },
        "IsPublic": false,
        "SmartContractUID": "00000000-0000-0000-0000-000000000000",
        "Features": [],
        "MinterAddress": "xDnL4MCGtgHu85JJHdN1fkXinHzKaqVQ59"
    };

    const url = `${CLI_BASE_URL}/scapi/scv1/CreateSmartContract`;
    const request = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    });

    const data = await request.json();

    if(data[0]["Success"] == true){
        return data[0]['SmartContract']['SmartContractUID'];
    }

    return null;

};


module.exports = compileNft;

