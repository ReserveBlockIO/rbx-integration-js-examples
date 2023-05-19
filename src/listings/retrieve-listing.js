const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const retrieveListing = async (listingId) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/GetListing/${listingId}`;
    const request = await fetch(url);

    const data = await request.json();

    if(!data){
        return null;
    }

    if(data['Success'] == true){
        return data['Listing'];
    }

    return null;
        
};


module.exports = retrieveListing;

