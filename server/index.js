const express = require("express");
const dotenv = require("dotenv").config({ path: "../.env" });
const port = process.env.PORT || 3000;
const app = express();

const errorHandler = require("./middleware/errorMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goal", require("./routes/goalRoute"));


app.use(errorHandler);

app.listen(port, () => console.log(`Port: ${port}`));
