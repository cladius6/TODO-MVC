// @deno-types="npm:@types/express"
import express from "npm:express";
import router from "./src/routes/app.routes.ts";

export const app = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => {
  console.log("Server listening on port 8080");
});
