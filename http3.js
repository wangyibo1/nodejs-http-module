/**
 * Created by YiboWang on 2017/3/21.
 */
var http=require('http');
var NEWS={
    1:'这里是第一篇新闻的内容',
    2:'这里是第二篇新闻的内容',
    3:'这里是第三篇新闻的内容'
};
function getNews(id){
    return NEWS[id] || '文章不存在';
}
var server = http.createServer(function(req,res){
    function send(html){
        res.writeHead(200,{
            'content-type': 'text/html;charset=utf-8'
        });
        res.end(html);
    }
    if(req.url ==='/'){
        send('<ul>'+
            '<li><a href="/news?type=1&id=1">新闻1</a></li>'+
            '<li><a href="/news?type=1&id=2">新闻2</a></li>'+
            '<li><a href="/news?type=1&id=3">新闻3</a></li>'+
            '</ul>');
    }else if(req.url === '/news?type=1&id=1'){
        send(getNews(1));
    }
    else if(req.url === '/news?type=1&id=2'){
        send(getNews(2));
    }
    else if(req.url === '/news?type=1&id=3'){
        send(getNews(3));
    }else {
        send('<h1>文章不存在！</h1>');
    }
});
server.listen(3002)
