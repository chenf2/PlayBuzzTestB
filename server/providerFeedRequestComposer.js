'use strict';

// providers file loader
const providerLoader = require('./modules/providerFileLoader');

class ProviderFeedRequestComposer{

     getProviderUrl(providerName, videoId){
        let providerData = providerLoader.providerFileLoader[providerName];
        if(!providerData)
        {
            return {error:'provider not exist'};
        }

        return this.buildProviderUrl(providerData,videoId,providerName);
    }

    buildProviderUrl(providerData,videoId,providerName){
        let url = providerData.providerApiUrl;
        url = url.replace('{ProviderKey}',providerData.providerKey);
        url = url.replace('{videoID}',videoId);

        let statisticsUrl = providerData.statisticsUrl;
        statisticsUrl = statisticsUrl.replace('{ProviderKey}',providerData.providerKey);
        statisticsUrl = statisticsUrl.replace('{videoID}',videoId);

        let playerUrl = providerData.playerUrl;
        playerUrl = playerUrl.replace('{videoID}',videoId);

        return {
                    feedUrl:url,
                    feedTitle:providerData.titlePathInReplay,
                    statisticsUrl:statisticsUrl,
                    viewCount:providerData.viewCountPathInReplay,
                    playerUrl:playerUrl,
                    source:providerName
                };
                    
    }

}

exports.providrComoser = new ProviderFeedRequestComposer();

