import { Router, json } from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import config from "config"
const router = Router()
// /api/auth/register
router.post("/register", [
    check("email", "Wrong email").isEmail(),
    check("password", "Password must be at least 8 characters long").isLength({ min: 8 }),
    check("username", "Username must be at least 3 characters long").isLength({ min: 3 })
],
async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Wrong data"
            });
        }
        const { username, email, password } = req.body;
        json
        const finder = await User.findOne({ $or: [{ email: email }, { username: username }] });
        if (finder) {
            return res.status(400).json({ message: "We have a user with this email or username, please go to the login page" });
        }
        const hashedPassword = await bcrypt.hash(password, 15);
        const user = new User({ username, email, password:hashedPassword});
        await user.save();
        const token = jwt.sign(
            {userId:finder.id},
            config.get("jwtKey"),
            {expiresIn:'3h'}
        )
        res.json({token, userId:finder.id})
        res.status(201).json({ message: "User created" });
    } catch (e) {
        res.status(500).json({ message: "Something went wrong, please try again or contact us" });
    }
});
// /api/auth/login
router.post("/login",[
    check("email", "Please enter correct email").normalizeEmail().isEmail(),
    check("password", "Please enter password").exists()], 
    async (req,res)=>{
    try {
    const {email,password}= await req.body
    const errors = validationResult(req)
        if (errors.array().length!=0) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Please enter correct email"
            })
        }

        const finder = await User.findOne({email: email})
    if (!finder) {
        return res.status(404).json({message:"Email or password incorrect"}) 
        }
        const isMatch = await bcrypt.compare(password, finder.password)
        if (!isMatch) {
            return res.status(404).json({message:"Email or password incorrect"}) 
        }
        const token = jwt.sign(
            {userId:finder.id},
            config.get("jwtKey"),
            {expiresIn:'3h'}
        )
        res.json({token, userId:finder.id})
    } catch (error) {
        res.status(500).json({message:"something went wrong, please try again or contact us"}) 
        console.log(error);
    }

})
// /api/auth/me
router.get("/me",
async (req, res) => {
    const token = req.headers.authorization;
    try {
        const decodedToken = jwt.verify(token, config.get("jwtKey"))
        if (decodedToken.userId) {
            const finder = await User.findOne({_id: decodedToken.userId})
            res.json(finder.username)
        }else{
            return res.status(404).json({message:"Incorect token"}) 
        }
}catch (err) {
    console.error('Error while decoding JWT:', err);
    return res.status(400)
}
  }
)
export default router