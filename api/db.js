import pkg from "pg";
const { Client } = pkg;

export const client = new Client({
 host: "db.dszsosbglhlovlmakudo.supabase.co",
 user: "postgres",
 database: "postgres",
 password:"iwanhanafiah",
 port:5432,
});
await client.connect();


console.log("Terhubung ke basis data");


