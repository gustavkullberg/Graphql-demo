//import * as express from 'express';
const express = require('express')
import {Request, Response} from 'express'

const port = 3000
const app = express();
import {rootRouter, primeNumberRouter} from './routers'
app.use(express.json());

//router
app.use(rootRouter, primeNumberRouter)

//static

//port
process.env.APP_PORT = port;

//Startup
(async () => {
    app.listen(process.env.APP_PORT, () => console.log(`Server started on port ${process.env.APP_PORT} ;p`))
})().then(
    () => null,
    (err) => {
        console.log(`Express was not started ${err}`),
        process.exit(1)
    }
)