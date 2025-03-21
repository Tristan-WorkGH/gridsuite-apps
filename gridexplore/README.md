# GridExplore

This app uses commons-ui library which released in the npmjs packages.

To launch the app type `npm install` then `npm start` .

If you are a developer and you want to update / enhance components used from the gridsuite commons-ui library
click [here](https://github.com/gridsuite/commons-ui) and follow instructions.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

#### License Headers and dependencies checking

To check dependencies license compatibility with this project one locally, please run the following command :

```
npm run licenses-check
```

Notes : 
* Check [license-checker-config.json](license-checker-config.json) for license white list and exclusion.
If you need to update this list, please inform organization's owners.
* Excluded dependencies :
    * esprima@1.2.2 : old version of a dependency which doesn't have a recognized license identifier on https://spdx.org/licenses/ (BSD)
    * jackspeak@2.3.6 and path-scurry@1.10.2 : dependencies to be removed once Vite migration done