const constants = require("../constants");

const { CLI_BASE_URL } = constants;

const deleteListing = async (listingId) => {

    const url = `${CLI_BASE_URL}/dstapi/DSTV1/DeleteListing/${listingId}`;
    const request = await fetch(url);

    const data = await request.json();

    return data['Success'] == true;
        
};


module.exports = deleteListing;

