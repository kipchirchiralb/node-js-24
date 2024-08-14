const httpModule  = require("http")

const server = httpModule.createServer((request,response)=>{
    console.log(request.method); // get , post
    console.log(request.path); // eldohub.co.ke/about
    if(request.path=="/users"){
        
    }
    console.log( request.headers["user-agent"] );  // parts of a http request - headers, uri, domain, protocol
    response.statusCode = 404
    response.end("we sid not understand yiur request. check the url once mmore")
})
// start -- network -- port-- a number -- 
// networking ports, http methods , http status codes(redirection,server,client, success)
// parts of a http request
// http statelessness --- 
// explore available opportunities---intershipsss--- 
// express js
server.listen(3000)

// 
