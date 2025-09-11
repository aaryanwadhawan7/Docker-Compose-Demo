import { PrismaClient } from '@prisma/client/extension';
import express from 'express';
const app = express();
const prismaClient = new PrismaClient
const PORT = 3000;

app.get ('/', (req, res) => {
    res.json({
        "message" : 'GET Endpoint'
    })
})

app.post('/', async (req, res) => {
    await prismaClient.user.create({
        data : {
            username : Math.random().toString(),
            password : Math.random().toString()
        }
    })
})
app.listen (3000, () => {
    console.log (`Server is running on port ${PORT} !`);
})