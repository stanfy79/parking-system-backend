const express = require("express");
const collection = require("./models/server");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const { plete, reason, note, fileBase64 } = req.body;

    // Decode base64 data to binary
    const decodedImage = Buffer.from(fileBase64.split(",")[1], "base64");

    const data = {
      plete: plete,
      reason: reason,
      note: note,
      fileUrl: fileBase64, // Save the base64 string if needed
      fileBinary: decodedImage, // Save the binary data in MongoDB
    };

    await collection.insertMany([data]);

    res.status(200).json({ success: true, message: "Data inserted successfully." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(8000, function () {
  console.log("Listening on 8000");
});
