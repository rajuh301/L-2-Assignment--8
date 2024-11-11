import express, { Application, Request, Response } from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import router from "./app/routes";
import globalErrorHandlear from "./app/middleWares/globalErrorHandlear";

const app: Application = express();

app.use(cors());

//purser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req: Request, res: Response) => {
    res.send({
        message: "Assignment-8 server is running "
    })
});

app.use("/api/", router);

app.use(globalErrorHandlear)



export default app;
