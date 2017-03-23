/**
 * Created by YiboWang on 2017/3/21.
 */
var http=require('http')
var server=http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers)
    res.end('Hello World')
});
server.listen(3001)
