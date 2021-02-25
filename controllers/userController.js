const router = require('express').Router()
const db = require('../models')


router.get('/new', (req, res) => {
    res.render('newUser')
})

router.post('/', async (req, res) => {
    try{
        const newUser = await db.user.create({
        email: req.body.email,
        password: req.body.password
        })
        res.cookie('userId', newUser.id)
        res.redirect('/')
    } catch(err) {
        console.log(err)
    }
})


 

module.exports = router