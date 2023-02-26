const express = require("express");
const app = express();
const dotenv = require("dotenv")


app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${process.env.PORT || 8080}`)
})