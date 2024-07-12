const express = require('express')

const app = express()

app.use(express.json())

const playerHttpHandler = require('./features/player/httphandler')

const start = async() => {

    app.use('/player_v1', playerHttpHandler)
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
}

start()