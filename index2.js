const http = requier("http");
const toProperUpper = require("proper-upper-case")
const library2 = require("./library2")

http.creatServer((request,response)=>{
    library2.properCase(hi)
    const result = toProperUpper ("Hi Prativa");
    response.writeHead(200,{"Content-type":"text/html"});
    response.end("Hi Prativa");

})
.listen(7770);
console.log("server is running");