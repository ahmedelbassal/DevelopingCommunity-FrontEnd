// require express module
const express = require('express');

// for path location strategy
const path = require('path');

// extract app function from module express
const app = express();

// make express serve static directory what we built in dist folder
app.use(express.static(__dirname + '/dist/developingCommunity'))

// launch server by express... make it listen to port craeted by repository or 8000 in local host
app.listen(process.env.PORT || 4200,()=>{

    console.log('server is listening on 4200')
});

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/developingCommunity/index.html'));
})