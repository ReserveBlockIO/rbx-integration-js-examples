const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const retrieveCollection = async (collectionId) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetCollection/${collectionId}`;
    const request = await fetch(url);

    const data = await request.json();

    if(!data){
        return null;
    }

    if(data['Success'] == true){
        return data['Collection'];
    }

    return null;
        
};


module.exports = retrieveCollection;

