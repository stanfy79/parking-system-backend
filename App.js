const express = require("express");
const collection = require("./models/server");
const cors = require("cors")
const bodyparser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", cors(), (req, res) => {

})

app.post("/", async(req, res) => {
    const {
            plete,
            reason,
            note,
            fileUrl
    } = req.body
    const data = {
                    plete:plete,
                    reason:reason,
                    note:note,
                    fileUrl:fileUrl
    }

    await collection.insertMany([data])
})

app.listen(8000, function() {
    console.log("Listening on 8000")
})