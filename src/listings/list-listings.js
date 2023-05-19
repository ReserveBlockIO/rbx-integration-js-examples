const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const listListings = async (collectionId) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetCollectionListings/${collectionId}`;
    const request = await fetch(url);

    const data = await request.json();

    if(!data){
        return null;
    }

    if(data['Success'] == true){
        return data['Listings'];
    }

    return null;
        
};


module.exports = listListings;

