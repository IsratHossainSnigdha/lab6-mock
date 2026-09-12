const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <html>
            <head>
                <title>Lab 6 Mock Exam</title>
            </head>
            <body>
                <h1>Lab 6 Deployment Successful yeeeeeeeeee! 🎉</h1>
                <p>Deployed using GitHub Actions → VPS → Nginx.</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});