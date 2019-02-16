const express = require('express')

export const rootRouter = express.Router()
rootRouter.get('/', (_req, res) => {
    res.send({
        status: 'ok',
        timeStamp: new Date()
    })
})