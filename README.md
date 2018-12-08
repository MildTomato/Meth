# Meth

Meth is for users to buy and sell [M]isleading [E]ncrypted [Th]umbnails, built on top of Ethereum blockchain.

## Motivation

Somthing about this repo

## Structure

This is a basic react app that functions as a demonstration marketplace for the underlying Meth smartcontract.

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

```bash
npm start # Runs the app in the development mode
npm test # Launches the test runner in the interactive watch mode
npm run build #Builds the app for production to the `build` folder
npm run eject # Ejects the app from the standard config build
```

