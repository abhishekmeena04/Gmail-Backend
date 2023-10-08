import express from "express";
import cors from "cors";
import Connection from "./databse/db.js";
import routes from "./routes/route.js";

const app = express();

app.use(cors());
app.use(cors({credentials: true, origin: 'https://gmail-frontend.vercel.app', methods: ['GET', 'POST']}));
app.use(express.urlencoded());
app.use(express.json());
app.use("/", routes);

const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
