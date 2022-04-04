require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;
const cors = require("cors");

const app = express();

require("./config/connectDB")();

app.use(cors());
app.use("/api", require("./routes/api.routes"));

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
