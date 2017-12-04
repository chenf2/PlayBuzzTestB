
class configuration{
    get feedUrl(){
        return "https://cdn.playbuzz.com/content/feed/items";
    }

    get options(){
        return  {
            port: 443,
            path: '/some/path',
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json'
                      }        
          };
    }
}

exports.config = new configuration();