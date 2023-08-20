router.post("/add",
async (req, res) => {
    try {
        if (req.body.username) {
            console.log(req.body)
            const finder = await User.findOne({username: req.body.username})

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