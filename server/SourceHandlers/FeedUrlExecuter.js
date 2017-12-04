const clientReplayPoco = require("../clientPocos/clientPoco").default;
const configuration = require('../config/generalConfig');

class urlExecuter{


  urlClientReplayBuilder(feedObject){
    let clientResult = new clientReplayPoco();

    clientResult.title = (feedObject.title) ? feedObject.title: '';
    clientResult.url = feedObject.url;
    clientResult.views = feedObject.views;

    return clientResult;
  }
}


exports.urlFeedExecuter = new urlExecuter();
