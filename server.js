var staticServer = require('static-server');

var server = new staticServer({
    rootPath : './dist/' ,
    port : 3000
});

server.start(()=>{
    console.log('Server started at port ',server.port);
});
