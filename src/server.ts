import app from './app.js'
import type { Server } from "node:http";

let server: Server;
let port: number = Number(process.env.PORT)

async function startServer() {
    server = app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });

    server.on('error', (error) => {
        console.error(`Server cannot start: ${error}`);
        process.exit(1);
    })
}

async function closeConnection() {
    if (server) {
        await new Promise(resolve => server.close(resolve));
    }
}

startServer().catch((error) => {
    console.error(`Server cannot start: ${error}`);
    closeConnection();
    process.exit(1);
})