import {defineConfig} from "drizzle-kit";
import {env} from "./src/config/env.js";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema",
    out: "./migrations",
    dbCredentials: {
        url: env!.DATABASE_URL,
    },
});
