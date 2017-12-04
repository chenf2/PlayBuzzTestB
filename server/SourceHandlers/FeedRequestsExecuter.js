'use strict';

const request = require('request');
const objectPath = require("object-path");
const configuration = require('../config/generalConfig');
const clientReplayPoco = require("../clientPocos/clientPoco").default;

let getFeedDataFromProvider =   function(providerFeedRequestData){

  let options = configuration.config.options;

  if (providerFeedRequestData.error)
    return; //** Need error message to the user */

  return  getTite(options,providerFeedRequestData).then(function(result) {
    return getViewsCount(options,providerFeedRequestData,result)
  }).then(function(result) {
    return result;
  }).catch(function(){
    //handel the exception write to log...
  });;
};

let getTite = function(options,providerFeedRequestData){
  return new Promise(function(resolve, reject){
    request.get(providerFeedRequestData.feedUrl,options,function(err,res,body){

      if(err) //TODO: handle err
        reject('error');

      let replayBody = JSON.parse(res.body);

      let  title = objectPath.get(replayBody,providerFeedRequestData.feedTitle);
      resolve(title);

    });

  })
};

let  getViewsCount = function(options,providerFeedRequestData,title){
  return new Promise(function(resolve, reject){
    request.get(providerFeedRequestData.statisticsUrl,options,
      function(err,res,body){

        if(err) //TODO: handle err
          reject('error');

        let replayBody = JSON.parse(res.body);
        let count = objectPath.get(replayBody,providerFeedRequestData.viewCount);
        let clientResult = new clientReplayPoco();

        clientResult.title = title || '';
        clientResult.url = providerFeedRequestData.playerUrl;
        clientResult.views = count;

        resolve(clientResult);
      });
  })
};


exports.feedsRequestExe = getFeedDataFromProvider;
  
