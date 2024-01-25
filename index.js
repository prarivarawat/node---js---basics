const http = require("http");
const upperCase = require("to-upper");
//const library= require('./library')
//const library2 =require('./library2')

http
.createServer((request,response) =>{
    const result = upperCase("Hello Prativa");
    
    //.add(2,3)
    //library2.sub(4,5)
    //library2.mul(3,5)
    //library.getHello
    //library.getNamaste("lol")
    response.writeHead(200,{"Content-Type":"text/html"});
    response.end("hello prativa");
})
.listen(8000);

console.log("Server is running");