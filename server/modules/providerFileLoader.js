'use strict';

const fs = require('fs');

let providersConfig = function()
{
   let rawdata = fs.readFileSync('./server/modules/providers.json')
   return JSON.parse(rawdata);
};

//create a singleton
exports.providerFileLoader = providersConfig();