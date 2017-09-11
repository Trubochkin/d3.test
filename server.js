const staticSrv = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
const file = new staticSrv.Server('./dev');
const port = 9000;
require('http').createServer((request, response) => {
  request.addListener('end', () => {
    //
    // Serve files!
    //
    file.serve(request, response);
  }).resume();
}).listen(port, console.log(`server started localhost:${port}`));