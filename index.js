
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


let minted, smartContractUid, nfts, nft,  success, txHash, stage, fromAddress, toAddress, amount;

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

        default:
            console.log('Invalid command');

            break;

    }

}



main();