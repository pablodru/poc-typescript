import express from "express";
import router from "@/routers/index.router";
import errorHandler from "./middlewares/error";

const app = express();

app.use(express.json())
app.use(router);
app.use(errorHandler)

const port : number = Number(process.env.PORT) || 5000
 
app.listen(port, () :void => console.log(`Server running on port ${port}`));