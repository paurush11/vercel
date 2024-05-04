import express from "express";
import cors from "cors";
import { generateFiveDigitId } from "./utils/generateId";
import simpleGit from "simple-git";
import { getFolderPathsFromId } from "./utils/getPathsFromFiles";

const app = express();
app.use(cors());
app.use(express.json())

app.post("/deploy", async (req, res, next) => {
    try {
        const url = req.body.url;
        const id = generateFiveDigitId();
        await simpleGit().clone(url, `output/${id}`)
        res.json({
            id
        })
    } catch (E) {
        console.error(E)
    }
})

app.get("/", (req, res) => {
    try {
        const response = getFolderPathsFromId('tvqmh')
        res.json({
            response
        })

    } catch (E) {
        console.error(E)
    }
})


app.listen(3000, () => {
    console.log("server started on port 3000")
})
