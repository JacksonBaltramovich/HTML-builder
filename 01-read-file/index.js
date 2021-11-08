const fs = require('fs');
const path = require('path');


const myReadText = fs.createReadStream(myPath, 'utf-8');

myReadText.on('data', function(chunk) {
    console.log(chunk);
});