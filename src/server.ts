import app from './app.js'
import type { Server } from "node:http";
import { env } from './config/env.js'; 


const server: Server = app.listen(env.PORT, (error) => {
    if (error) throw error;
    console.log(`Server is running on https://localhost:${env.PORT}`);
});

let isShuttinDown = false;

async function shutdown() {
    if (isShuttinDown) return;
    isShuttinDown = true

    setTimeout(() => process.exit(1), 8000);

    await new Promise(resolve => server.close(resolve));
    
    process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM",shutdown);