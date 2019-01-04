/*jslint node: true */
"use strict";
var headlessWallet = require('./start.js');
var conf = require('./conf.js');
var eventBus = require('luxalpacore/event_bus.js');

function onError(err){
	throw Error(err);
}

function createAsset(){
	var composer = require('luxalpacore/composer.js');
	var network = require('luxalpacore/network.js');
	var callbacks = composer.getSavingCallbacks({
		ifNotEnoughFunds: onError,
		ifError: onError,
		ifOk: function(objJoint){
			network.broadcastJoint(objJoint);
		}
	});
	var asset = {
		cap: conf.cap,
		is_private: false,
		is_transferrable: true,
		auto_destroy: false,
		fixed_denominations: false,
		issued_by_definer_only: true,
		cosigned_by_definer: false,
		spender_attested: false

	};

	composer.composeAssetDefinitionJoint(conf.my_address, asset, headlessWallet.signer, callbacks);

}

eventBus.on('headless_wallet_ready', createAsset);


