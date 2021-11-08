const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');






async function mergeStyles() {
    const data = await fsPromises.readdir(myPath);

    data.forEach(async (file) => {
        const sourcePath = path.join(__dirname, "styles", file);
        const stat = await fsPromises.stat(sourcePath);

        if(stat.isFile()) {
            const ext = path.extname(file);

            if(ext === ".css") {
                fs.readFile(sourcePath, 'utf-8', (err, content) => {
                    if (err) throw err;


                    fs.appendFile(bundlePath, content, err => {
                        if(err) throw err;
                    })
                })
                
            }
        }
    })
}

mergeStyles();