const express = require("express");
const app = express();
const path = require("path")
const { sendEmail } = require("./services/sengrid.service")

const cors = require("cors")
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'frontend', 'build')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(cors())

app.post("/email", async (req, res) => {
    const { error } = await sendEmail(req.body.email, req.body.fullName, req.body.message)
    if (error) {
        return res.status(500).json("something went wrong")
    }
    return res.status(200).json("Email sent! Please check your inbox")
})

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', "index.html"))
})

app.listen(PORT, () => {
    console.log("app running on port " + PORT)
})