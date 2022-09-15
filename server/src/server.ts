import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient({
    log: ['query'],
});

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});

app.get('/games', async (request, response) => {
    return response.json(await prisma.game.findMany({
        include: { _count: { select: { ads: true } } }
    }));
});

app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body = request.body; // zod validation
    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            yearsPlaying: body.yearsPlaying,
            discord: body.discord,
            weekDays: body.weekDays,
            hourStart: body.hourStart,
            hourEnd: body.hourEnd,
            useVoiceChannel: body.useVoiceChannel,
        }
    })
    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    return response.json(await prisma.ad.findMany({
        orderBy: {
            createdAt: 'desc',
        },
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: { gameId }
    }));
});

app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;
    const ad = await prisma.ad.findUnique({
        select: { discord: true },
        where: { id: adId }
    });
    if (!ad) { return response.status(404).json(); }
    return response.json(ad);
});

app.listen(3333);
