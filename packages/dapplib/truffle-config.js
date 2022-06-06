require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture struggle deny praise coconut gentle light army genre'; 
let testAccounts = [
"0x46990fb7a71e5d36447525a8243ac73cc68363c50a138b1cd446549f3e7d961f",
"0x46944a33ba2981e55b5a5c5639c3ba38f99019df445d1ec900c6b50385e20d28",
"0x408c333805468ae84fac904cdf3947766ca1451c15d8f15286edaed75654bb48",
"0x1654151f0d7cd2d422e9af48ea8baee5f4617817a394c8eab6d6ba6fb3a54387",
"0xdd5ccb6be3d58cc748a909c62e9df64f4cb0a5329d44d2086eb569372227db60",
"0xc01ac54f342bac987ca23b0fcdef86733400ef420c562fd2f508ddc798320cf0",
"0xd5538e0d8fa9ccb9bec862b569bae3386c850f27d02a835bf374105bbda41908",
"0xef6a056821fcb6ef4935b12d22eb901233dde22690d99ef3446a2bd7fff2144d",
"0xe64ffe45dbd4e47a367a4dcbc96f04d283396c650bca8ea9d263f6d77da5c3f3",
"0xc85982c4f47771411e04faddc8c4ecbeab4ce35854c586e935fdcb19f1a34894"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

