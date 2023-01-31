import express from "express";
import routes from "./src/controllers/routes.js";
import ErrorHandler from "./src/middleware/ErrorHandler.js";

const app = express();

app.use(express.json());

routes(app);

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
