 const express = require("express")
 const router = express.Router()

 // @desc login/landing page
 // @route GET /
 router.get("/", (req, res) => {
     res.send("Login")
 })

 // @desc dashboard
 // @route GET /dashboard
 router.get("/dashboard", (req, res) => {
    res.send("Dashboard")
})

 module.exports = router