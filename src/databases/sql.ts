import postgres from "https://deno.land/x/postgresjs/mod.js";

const sql = postgres("postgres://postgres:postgres@localhost:54321/postgres");
const result = await sql`SELECT * FROM pg_type WHERE typname = 'todo_status'`;

if (result.length === 0) {
  await sql`CREATE TYPE todo_status AS ENUM ('TODO', 'IN_PROGRESS', 'DONE')`;
}
await sql`CREATE TABLE IF NOT EXISTS todos (
    id serial primary key,
    name varchar(255) NOT NULL,
    description TEXT,
    todo_status todo_status default 'TODO'
)`;

export default sql;
