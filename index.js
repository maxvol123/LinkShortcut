import express from "express";
import config from "config"
import mongoose from "mongoose";
import router from "./routes/auth.routes.js"
import cors from "cors";
import routerl from "./routes/link.routes.js";
const app = express()
app.use(express.json({extended:true}))
app.use(cors())
app.use('/api/auth', router)
app.use('/api/link', routerl)
const PORT = config.get('port')
async function start() {
    try {
        await mongoose.connect(config.get("mongodbLink"),{
        })
        app.listen(PORT, ()=>{ console.log(`app has been started on port ${PORT}`)})
    } catch (error) {
        console.log("Server error ",error.message);
        process.exit(1)
    }
}

start()