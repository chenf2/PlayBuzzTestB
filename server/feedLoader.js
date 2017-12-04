'use strict';

const configuration = require('./config/generalConfig');
const request = require('request');

class feedLoader{
  
  getFeedList()
  {
    return new Promise(function(resolve, reject){

      let feedUrl = configuration.config.feedUrl;
      let options = configuration.config.options;

      request.get(feedUrl,options,function(err,res,body){
            if(err) //TODO: handle err
              reject('error');

              let feedReplay = JSON.parse(res.body);
              resolve(feedReplay);
      });
    });
  }

}


exports.feedData =new feedLoader();