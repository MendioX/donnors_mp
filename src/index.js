import express from "express";

import payments from "./routes/payments.js"

import { PORT } from "./routes/config.js";


import morgan from "morgan";


const app = express();

app.use(morgan('dev'))
app.use(payments);

app.listen(PORT)

console.log("Server on", PORT);
