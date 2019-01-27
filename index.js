const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;

app.get('/api/v1/articles/:parent_id', (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    fs.readFile('mockResponses/articles.json', (err, data) => {
        if (err) throw err;
        let body = JSON.parse(data);

        console.log("===============================================================");
        console.log("Requested article id: ", request.params.parent_id);
        console.log("Response body: ", data.toString());
        console.log("===============================================================");

        response.send(body);
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
