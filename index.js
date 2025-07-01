import mongoose from "mongoose";
import express from "express";

const app =  express();

mongoose.connect("mongodb+srv://KalpaniKapuge:KDKapuge5670@cluster0.igyzv3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    () => {
        console.log("Connected to the database");
    }
).catch(
    () => {
        console.log("Database Connection failed");
    }
)

app.listen(3000,() => {
    console.log("Server is running on prot 3000")
});