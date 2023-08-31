import shortid from "shortid";
import Link from "../models/Link.js";
import config from 'config'
import { Router } from "express";
import jwt from "jsonwebtoken";
const routerl = Router()
routerl.post("/add",
async (req, res) => {
    try {
        const baseUrl = config.get("baseUrl")
        const from = req.body.from
        const code = shortid.generate()
        const to = baseUrl+"/t/"+code
        const token = req.body.headers.authorization
        const decodedToken = jwt.verify(token, config.get("jwtKey"))
        console.log(from);
        const link = new Link({
            code, to, from, owner: decodedToken.userId
        })
        await link.save()
        console.log(link);
        res.status(201).json({link})
}catch (err) {
    console.error('Error create link:', err);
    return res.status(400)
}
  }
)
routerl.get("/links",
async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, config.get("jwtKey"))
        const links = await Link.find({owner: decodedToken.userId})
        res.json(links)
}catch (err) {
    console.error('Error get all links:', err);
    return res.status(400)
}
  }
)
export default routerl