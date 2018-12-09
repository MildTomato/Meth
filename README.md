# Meth

Meth is for users to buy and sell [M]isleading [E]ncrypted [Th]umbnails, built on top of Ethereum blockchain. You can find a functioning demo at:
http://buymeth.com

## Motivation

We wanted an ERC721 token marketplace where each token references some data encrypted with the public key of the owner - so only they can enjoy the resource.

UX challenges to this are that the user needs to decrypt and re-encrypt the file in order to finalise a sale BUT encrypt/decrypt methods are currently being implemented in Metamask! [https://github.com/ethereum/EIPs/pull/1098] [https://github.com/MetaMask/eth-sig-util/pull/18]

We assume that this interface is available and have built a DApp that consumes it - so we are ready for when it arrives

Some slides which explain the concept: https://docs.google.com/presentation/d/1i4GeGkPyJhYGsO_gXkgUMEkKkfSavCE34WskyQgOgbk/edit?usp=sharing

## Structure

This is a basic react app that functions as a demonstration marketplace for the underlying SecretContent smartcontract.

The project has the following structure:


```bash

|-- contracts 
|-- migrations 
|-- src # Frontend React App
    |-- components 
        |-- containers # stateful components
        |-- pure # pure components
    |-- Lib # common code
        |-- encryption.js # This is where the bulk of the interaction with the contract will go
        |-- products.json # Some mock products 
        |-- store.js # A fake Database 
    |-- pages # website pages
    |-- styles # CSS and Sass
```


## Development

We use Ganache for local ethereum dev environment

```bash
npm start # Runs the app in the development mode
npm test # Launches the test runner in the interactive watch mode
npm run build #Builds the app for production to the `build` folder
npm run eject # Ejects the app from the standard config build
truffle migrate # deploys smart contracts
```

