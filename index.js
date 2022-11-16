var fs=require('fs');
var http=require('http');
var server = http.createServer(function(req,res){
    if(req.url=="/"){
        let data=fs.readFileSync('Home.html','utf8');
        res.end(data);
    }
    else if(req.url=="/About"){
        let data=fs.readFileSync('About.html','utf8');
        res.end(data);
    }
    else if(req.url=="/log in"){
        let data=fs.readFileSync('log in.html','utf8');
        res.end(data);
    }
    else if(req.url=="/Registration"){
        let data=fs.readFileSync('Registration.html','utf8');
        res.end(data);
    }
});
server.listen(1010);
console.log("server run success");