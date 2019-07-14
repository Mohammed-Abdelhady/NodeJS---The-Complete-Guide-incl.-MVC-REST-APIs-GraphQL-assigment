const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write(`
    <html>
        <head><title>Home</title></head>
        <body>
            <h1>Routing at users</h1>
            <form action="/create-user" method="POST">
                <input type="text" name="msg">
                <button type="submit">Submit</button>
            </form>
        </body>
    </html>
    `);
      return res.end();
    }
    if(url === '/users') {
        res.write(`
        <html>
        <head><title>Users</title></head>
        <body>Welcome at Users
            <ul>
                <li>user1</li>
                <li>user2</li>
            </ul>
        </body>
        </html>
    `);
        return res.end();
    }

    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk=>{
            body.push(chunk);
        });

        req.on('end', ()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
        });

        res.statusCode = 302;
        res.setHeader('location', '/users');
        return res.end();
    }
});

server.listen(3000);