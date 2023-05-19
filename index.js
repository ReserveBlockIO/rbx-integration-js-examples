
const transferCoin = require("./src/coin/transfer-coin");

const compileNft = require("./src/nfts/compile-nft");
const mintNft = require("./src/nfts/mint-nft");
const listNfts = require("./src/nfts/list-nfts");
const retrieveNft = require("./src/nfts/retrieve-nft");
const transferNft = require("./src/nfts/transfer-nft");
const burnNft = require("./src/nfts/burn-nft");
const evolveNft = require("./src/nfts/evolve-nft");
const createShop = require("./src/shop/create-shop");
const saveShop = require("./src/shop/save-shop");
const publishShop = require("./src/shop/publish-shop");
const retrieveShop = require("./src/shop/retrieve-shop");
const toggleShopOnline = require("./src/shop/toggle-shop-online");
const retrieveNetworkShop = require("./src/shop/retrieve-network-shop");
const deleteShop = require("./src/shop/delete-shop");
const deleteNetworkShop = require("./src/shop/delete-network-shop");
const saveCollection = require("./src/collections/save-collection");
const listCollections = require("./src/collections/list-collections");
const retrieveCollection = require("./src/collections/retrieve-collection");
const deleteCollection = require("./src/collections/delete-collection");


let minted, smartContractUid, nfts, nft,  success, txHash, stage, fromAddress, toAddress, amount, shop, shopUrl, collections, collection, listings, listing;

const main = async () => {

    const args = process.argv.slice(2);
    if(args.length === 0) return console.log('No command provided');

    const command = args[0];

    switch(command) {

        // COIN COMMANDS

        case "send-coin":
            if(args.length < 3) return console.log('fromAddress, toAddress, and amount required');
            fromAddress = args[1];
            toAddress = args[2];
            amount = args[3];

            txHash = await transferCoin(fromAddress, toAddress, amount);
            if(!txHash) return console.log('Failed to send TX');
            console.log(`TX has been sent with hash of ${txHash}.`);

            break;

        // NFT COMMANDS

        case "compile-nft":
            smartContractUid = await compileNft();
            
            if(smartContractUid === null) return console.log('Failed to compile NFT');
            console.log(`Successfully compiled NFT with UID: ${smartContractUid}`);
            
            break;

        case "mint-nft":
            if(args.length < 2) return console.log('No smart contract UID provided');
            smartContractUid = args[1];
            minted = await mintNft(smartContractUid);
            
            if(!minted) return console.log('Failed to mint NFT');
            console.log("Successfully minted NFT");
            
            break;

        case "compile-and-mint":
            smartContractUid = await compileNft();
            
            if(smartContractUid === null) return console.log('Failed to compile NFT');
            console.log(`Successfully compiled NFT with UID: ${smartContractUid}`);

            minted = await mintNft(smartContractUid);
            if(!minted) return console.log('Failed to mint NFT');

            console.log("Successfully minted NFT");

            break;

        case "list-nfts":

            nfts = await listNfts(1);
            if(!nfts) return console.log("Failed to fetch NFTs");
            
            console.log(`${nfts.length} NFTs found:`);
            console.log(nfts);

            break;

        case "retrieve-nft":
            if(args.length < 2) return console.log('No smart contract UID provided');
            smartContractUid = args[1];

            nft = await retrieveNft(smartContractUid);
            if(!nft) return console.log('Failed to retrieve NFT');
            console.log(nft);
            
            break;

        case "transfer-nft":
            if(args.length < 3) return console.log('Smart contract UID and address required');
            smartContractUid = args[1];
            address = args[2];

            success = await transferNft(smartContractUid, address);
            if(!success) return console.log('Failed to transfer NFT');
            console.log("NFT Transfer has been started.");

            break;

        case "burn-nft":
            if(args.length < 2) return console.log('No smart contract UID provided');
            smartContractUid = args[1];

            txHash = await burnNft(smartContractUid);
            if(!txHash) return console.log('Failed to burn NFT');
            console.log(`NFT Burn TX has been sent with hash of ${txHash}.`);
            
            break;

        case "evolve-nft":
            if(args.length < 3) return console.log('Smart Contract UID, toAddress, and stage required');
            smartContractUid = args[1];
            toAddress = args[2];
            stage = args[3];

            txHash = await evolveNft(smartContractUid, toAddress, stage);
            if(!txHash) return console.log('Failed to evolve NFT');
            console.log(`NFT Evolve TX has been sent with hash of ${txHash}.`);

            break;

        // SHOP COMMANDS
        case 'create-shop':
            success = await createShop();
            if(!success) return console.log('Failed to create shop');
            console.log('Shop has been created');

        case 'save-shop':
            success = await saveShop();
            if(!success) return console.log('Failed to create shop');
            console.log('Shop has been saved');
            break;
        
        case 'publish-shop':
            success = await publishShop();
            if(!success) return console.log('Failed to publish shop');
            console.log('Shop has been published');
            break;
        
        case 'retrieve-shop':
            shop = await retrieveShop();
            if(!shop) return console.log('Failed to retrieve shop');
            console.log(shop)
            break;
        
        case 'retrieve-network-shop':
            if(args.length < 2) return console.log('No shop url provided');
            shopUrl = args[1];
            shop = await retrieveNetworkShop(shopUrl);
            if(!shop) return console.log('Failed to retrieve network shop');
            console.log(shop)
            break;

        case 'delete-network-shop':
            success = await deleteNetworkShop();
            if(!success) return console.log('Failed to delete shop from network');
            console.log(shop)
            console.log("Shop Deleted from Network")

            break;
            
        case 'delete-shop':
            success = await deleteShop();
            if(!success) return console.log('Failed to delete local shop');

            console.log("Shop Deleted Locally")
            break;
        
        case 'toggle-shop-online':
            const isOffline = await toggleShopOnline();
            if(isOffline === true){
                console.log('Shop status OFFLINE');
            } else if(isOffline === false){
                console.log('Shop status ONLINE');
            } else {
                console.log('Failed to update online status');
            }
            break;

        
        // COLLECTION COMMANDS
        case 'create-collection':
            collection = await saveCollection();
            if(!collection) return console.log('Failed to create collection');
            console.log("Collection created");

            break;
        
        case 'save-collection':
            collection = await saveCollection(1);
            if(!collection) return console.log('Failed to update collection');
            console.log("Collection Saved");
            break;
        
        case 'list-collections':
            collections = await listCollections();
            if(!collections) return console.log('Failed to list collections');
            console.log(collections);
            break;

        case 'retrieve-collection':
            if(args.length < 2) return console.log('No collection id provided');
            collectionId = args[1];
            collection = await retrieveCollection(collectionId);
            if(!collection) return console.log('Failed to retrieve collection');
            console.log(collection);
            break;
        
        case 'delete-collection':
            if(args.length < 2) return console.log('No collection id provided');
            collectionId = args[1];
            collection = await deleteCollection(collectionId);
            if(!collection) return console.log('Failed to delete collection');
            console.log("Collection deleted");
            break;


        default:
            console.log('Invalid command');

            break;

    }

}



main();