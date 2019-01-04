'use strict';

const headlessWallet = require('./start.js');
var conf = require('./conf.js');
var eventBus = require('luxalpacore/event_bus.js');


function onError(err){
    throw Error(err);
}

function issueAsset(){

    const divisibleAsset = require('luxalpacore/divisible_asset.js');
    const network = require('luxalpacore/network');
    const light_wallet = require('luxalpacore/light_wallet');
    light_wallet.setLightVendorHost(conf.hub);
    // when issuing, we also split the asset into 100 outputs for parallel payouts
    const COUNT_CHUNKS = 10;
    let chunk_amount = Math.round(conf.cap/COUNT_CHUNKS);
    let arrOutputs = [];
    for (var i=1; i<COUNT_CHUNKS; i++) // 99 iterations
        arrOutputs.push({amount: chunk_amount, address: conf.payout_address});

    divisibleAsset.composeAndSaveDivisibleAssetPaymentJoint({
        asset: conf.asset,
        paying_addresses: [conf.my_address],
        fee_paying_addresses: [conf.my_address],
        change_address: conf.my_address,
        //	to_address: myAddress,
        //	amount: conf.totalTokens,
        asset_outputs: arrOutputs,
        signer: headlessWallet.signer,
        callbacks: {
            ifError: onError,
            ifNotEnoughFunds: onError,
            ifOk: (objJoint) => {
                network.broadcastJoint(objJoint);
                console.error('==== Token issued');
            }
        }
    });
};


eventBus.on('headless_wallet_ready', issueAsset);