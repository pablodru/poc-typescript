import express from "express";
import router from "@/routers/index.router";

const app = express();

app.use(router);

const port : number = Number(process.env.PORT) || 5000
 
app.listen(port, () :void => console.log(`Server running on port ${port}`));