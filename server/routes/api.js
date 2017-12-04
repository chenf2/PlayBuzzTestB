const express = require('express');
const router = express.Router();
const feedLoader = require('../feedLoader');
const providerUrlComposer = require('../providerFeedRequestComposer');
const feedExecuter = require('../SourceHandlers/FeedRequestsExecuter');
const feedUrlExecuter = require('../SourceHandlers/FeedUrlExecuter');

router.get('/getFeed', (req, res) => {

  let feedsList;
  feedLoader.feedData.getFeedList().then((feedsList) => {
    let selectedFeed = selectRandomFeed(feedsList);

    if(selectedFeed.source.toLowerCase() == 'url') {
      res.json(feedUrlExecuter.urlFeedExecuter.urlClientReplayBuilder(selectedFeed));
    } else {
      let providerFeedRequestData =  providerUrlComposer.providrComoser.getProviderUrl(selectedFeed.source,selectedFeed.videoId);

      if(providerFeedRequestData.error) {
        //not supported publisher
        res.json( 'not supported publisher');
        return;
      }

      feedExecuter.feedsRequestExe(providerFeedRequestData).then(function(response){
        res.json(response);
      });
    }
  }).catch(function(){
    //handel the exception write to log...
  });;
  
});

function selectRandomFeed(feedsList)
{
  let feedLength = feedsList.items.length;
  let selectedItem = Math.floor(Math.random() * feedLength);
  return feedsList.items[selectedItem];
}

module.exports = router;
