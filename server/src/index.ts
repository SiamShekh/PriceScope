import express from "express";
import Utils from "./utils/Util";
import MainRoute from "./routes/main.route";
import { PrismaClient } from "../generated/prisma";

const app = express();

app.use(express.json());
app.use("/api", MainRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(Utils.ErrorHandler);

app.use(Utils.NotFound)

export default app;
export const Prisma = new PrismaClient();
