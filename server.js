const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const app = express();

connectDb();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/contact",require("./routes/contactRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`); 
})