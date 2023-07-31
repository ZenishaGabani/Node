const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();

try {
    const folder = fs.ReadStream('/ICT3_11/Assign')
    zip.folder("/ICT3_11/Assign",JSZip.folder)


    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('ICT3_11.zip'))
        .on('finish', function () {
            console.log("ICT3_11.zip Created.");
        });


} catch (err) {
    console.error(err)
}