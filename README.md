# RBX Integration JS Examples

## Overview

This repo contains node/javascript integration examples. This is not an SDK but of course you can copy and paste out the examples to integrate into your own workflow. This was built using javascript/node since it's a popular language - and it purposefully doesn't even use typescript to keep everything as simple and approachable as possible. The code can easily be ported to whatever your system's language is.

#### General Notes
1. You will need a core CLI running with its API enabled
    - Either press `10` to enable the API in the CLI's interface
    - Or, you can launch it like so: `./ReserveBlockCore enableapi`

2. If the wallet will be running on an alternate machine, you'll need to enable the `openapi` flag when launching
    - `./ReserveBlockCore enableapi openapi`
    - This will allow you to communicate to the CLI's API outside of localhost

3. If you are planning on running it using openapi, it is recommended you seed an `apitoken` to block non-authenticated access.
    - `./ReserveBlockCore enableapi openapi apitoken=random_lowercase_string`
    - Then, in all requests you will need to add this key/value into your headers: `{"apitoken": "random_lowercase_string"}`
    - If this is not included and/or is not the correct token, the API will throw a 403 error

4. The example code is built around testnet which is why you'll see RBX addresses in the examples beginning with an `x` rather than an `R`. To use this on mainnet you'll want to make sure the port in the `CLI_BASE_URL` (in `constants.js`) is set to `7292` instead of `17292`.

5. There are many more API endpoints available. Please visit http://localhost:7292/swagger on the machine running the CLI+API to review and interact with everything that's available.


## Topics Covered

The examples are broken up into five sections:

**coin**: examples for sending RBX native coin from one address to another

**nfts**: examples for compiling, minting, listings, retrieving, transferring, burning, and evolving NFTs

**shop**: examples for creating, reading, updating, deleting, and publishing P2P shops

**collections**: examples for creating, reading, updating, and deleting P2P shop collections

**listings**: examples for creating, reading, updating, and deleting P2P shop listings


## How To Use

The primary `index.js` includes a way to easily execute the various functions purely for example purposes. 

For example, to test compiling an NFT you'd want to review the `src/nfts/compile-nft.js` and update the payload to your liking.

Then run the following command:
```
$ node index.js compile-nft
```
If it's successful, the smart contract id will be logged to the console. Then you can run:
```
$ node index.js mint-nft SMART_CONTRACT_UID 
```
<small>NOTE: replace `SMART_CONTRACT_UID` with the id that was logged in the previous step.</small>


## Questions

For any questions related to integration, please reach out on our [#dev-talk](https://discord.com/channels/917499597692211260/933089423233527819) channel on Discord.

