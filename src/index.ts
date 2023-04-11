import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import cryptoRouter from "./routes/crypto.routes";
import routesUser from "./routes/user.routes";
import routesUserCrypto from "./routes/userCrypto.routes";
import cors from "cors";


dotenv.config();

const app: Express = express();
app.use(express.json())

const allowedOrigins = ["http://localhost:4200"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

const port = process.env.PORT;

app.get('/ping', (_req: Request, res: Response) => {
  res.send('Pongg!');
});

app.use("/api/crypto", cryptoRouter);
app.use('/api/user', routesUser);
app.use('/api/usercrypto', routesUserCrypto);


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});