const fs = require('fs');
const path = require('path');


const myPath = path.join(__dirname, 'text.txt');
const myReadText = fs.createReadStream(__dirname + '/text.txt', 'utf-8');

myReadText.on('data', function(chunk) {
    console.log(chunk);
});