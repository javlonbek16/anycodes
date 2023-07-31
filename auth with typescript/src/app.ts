import express, { Application, Request, Response } from "express";
import { connect } from "mongoose";


//  ---- 
import { model, Schema } from "mongoose";

const schema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const Model = model("Auth", schema)


//     -----



const app: Application = express();
app.use(express.json())



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api", (req: Request, res: Response) => {
    res.send("everything will be ok")
})

app.post("/api/create", (req: Request, res: Response) => {
    const { username, password } = req.body
    Model.create({ username, password });
    res.status(201).json({ message: "succesfully created" })
})


app.post("/api/login", (req: Request, res: Response) => {
    const { username, password } = req.body;
    
})

app.use((req, res, next) => {
    res.status(500).json({ message: "Interval Server Eror" });
});

const MONGO_URI = "mongodb://127.0.0.1:27017/authorization";

connect(MONGO_URI);
const PORT = 1234
app.listen(PORT, () => {
    console.log(PORT);
})





