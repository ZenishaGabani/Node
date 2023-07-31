 const decompress = require("decompress");

decompress("zip_file.zip", "zip_files")
  .then((files) => {
    console.log("Files unzipped successfully");
   // console.log(files);
  })
  .catch((error) => {
    console.log(error);
  }); 