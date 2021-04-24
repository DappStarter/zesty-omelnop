require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney clog tackle venture street repeat noble miss hunt light army gentle'; 
let testAccounts = [
"0x83cd38bf327517e12dab78a1f5f5292ab7e1247ca6c51b62a0f44d2542bf8892",
"0x7f5210bd43e97c6e817dd4472d546cc3cbde9bf734e8264c6ae9e7db404b5554",
"0x930679cb0d7074fb6dcc259eaea55ddb22e4b36187baf20ac2f5ebf95ac0a3d8",
"0x9da2cd15839bfe9c48c30af99eef82c15b6832396780be4f30d6e43753b49a56",
"0x00fa80ebfb6d3db30702137bcf311fae4ffd2cdfaa78c15389c444ace0b116db",
"0x802079102a4912e65873c427729557f6d7e1e57e84bceaea8a827f8bff26c92d",
"0x1b241bb170bf652d37c7914d9b9acbab53e3a547b31fd20fb48f1a8c3786c44c",
"0x441905214a9ffabc4dc0cecd647900348becdaf37a76200a2e8c5dd7d3f9bd2b",
"0x33bd632f1ddf3db0dfe20845c990f6336052846c524138598bc98a1a2a1e939a",
"0x4609c8a23051ff8ed5410681560f238b3e322e5327cfaffa2f10d5c0da3753cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
