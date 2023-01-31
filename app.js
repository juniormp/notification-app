import express from "express";
import routes from "./src/controllers/routes.js";

const app = express();

app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
