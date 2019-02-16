import * as express from 'express';
import {Execute} from '../../application/primes/PrimeQueryHandler'

export const primeNumberRouter = express.Router();
primeNumberRouter.get('/primes', (_req, res) => {
    let bajs =  Execute(_req.query.id)
    res.send(`id = ${bajs}`)
})
