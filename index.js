import http from "node:http"

// define port
const port = process.env.PORT || 3000

// create server
const server = http.createServer()

// create response function
function handleListener(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1><h2>SENAI 6.62</h2>');
    res.end()
}

// action on event "request"
server.on("request", handleListener)

// start server
server.listen(port, "0.0.0.0", ()=>console.log(`Server is running on port: ${port}`))