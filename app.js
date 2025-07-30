import http from 'http';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));
const {port, hostname} = config





const server = http.createServer((req, res) => {
    console.log(`Anfrage erhalten: ${req.method} ${req.url}`);
        
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hallo Welt vom Node.js Server');

});

server.listen(port, hostname, () => {
    console.log(`Server gestartet auf http://${hostname}:${port}/`);
});
