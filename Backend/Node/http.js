const http= require('http')
const path= require('path')
const fs= require('fs')


//creating a server
//takes 2 parameters, request and response
const server=http.createServer((req, res)=>{
    if(req.url==="/"){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)       
            res.end()
        })
       
    }
    if(req.url === "/user"){
        res.write('Welcone user rhytonee')
        res.end() 
    }
})
//listen to requests made to our server

server.listen(3000, ()=>console.log("Server is up and running......"))