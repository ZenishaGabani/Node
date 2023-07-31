
const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();

try {
    const JSData = fs.readFileSync('zip_files.js');
    zip.file("zip_files.js", JSData);
    const JSData1 = fs.readFileSync('extract_zip.js');
    zip.file("extract_zip.js",JSData1);

    

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('zip_file.zip'))
        .on('finish', function () {
            console.log("Files are zipped.");
        });

} catch (err) {
    console.error(err)
}
