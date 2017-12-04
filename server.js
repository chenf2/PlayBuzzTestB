const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
// API file for interacting
const api = require('./server/routes/api');
// providers file loader
const providerLoader = require('./server/modules/providerFileLoader');

const PORT = 3000;

class Server {
    constructor(){
        this.initParsers();
        this.initViewEngine();
        this.initRouts();
        this.start();
    }

    initParsers(){

        // Parsers
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false}));
    }

    initViewEngine(){
        // Angular DIST output folder
        app.use(express.static(path.join(__dirname, 'dist')));
    }

    initRouts(){
        // API location
        app.use('/api', api);

        // Send all other requests to the Angular app
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, 'dist/index.html'));
        });
    }

    start() {
        //Set Port
        const port = process.env.PORT || PORT;
        app.set('port', port);

        const server = http.createServer(app);
        server.listen(port, () => console.log(`Running on localhost:${port}`));
    }
}

new Server();
console.log("providers configuration file: " + JSON.stringify(providerLoader.providerFileLoader));

