const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const deleteCollection = async (collectionId) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/DeleteCollection/${collectionId}`;
    const request = await fetch(url);

    const data = await request.json();

    return data['Success'] == true;
        
};


module.exports = deleteCollection;

