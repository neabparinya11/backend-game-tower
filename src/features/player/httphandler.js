const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const router = require('express').Router()

router.route('/register').post(async (req, res)=>{
    const { email, username, password} = req.body
    
    const player = await prisma.player.create({
        data:{
            email: email,
            username: username,
            password: password,
        }
    })

    res.json(player)
})

module.exports = router