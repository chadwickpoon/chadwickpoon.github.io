import { createServer } from 'node:http';
import worker from '../dist/server/index.js';

createServer(async (request, response) => {
  try {
    const result = await worker.fetch(new Request(new URL(request.url, 'http://127.0.0.1:4317'), { method: request.method }));
    response.writeHead(result.status, Object.fromEntries(result.headers));
    response.end(Buffer.from(await result.arrayBuffer()));
  } catch (error) {
    console.error(error);
    response.writeHead(500).end('Preview error');
  }
}).listen(4317, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4317'));
