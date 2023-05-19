const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const listCollections = async () => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetAllCollections`;
    const request = await fetch(url);

    const data = await request.json();

    if(!data){
        return null;
    }

    if(data['Success'] == true){
        return data['Collections'];
    }

    return null;
        
};


module.exports = listCollections;

