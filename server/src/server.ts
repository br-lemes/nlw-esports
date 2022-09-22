import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const strToMinutes = (str: string) => {
    const [hours, minutes] = str.split(':').map(Number);
    return hours * 60 + minutes;
};

const minutesToStr = (minutes: number) => {
    const hourStr = String(Math.floor(minutes / 60)).padStart(2, '0');
    const minutesStr = String(minutes % 60).padStart(2, '0');
    return `${hourStr}:${minutesStr}`;
};

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
            weekDays: body.weekDays.join(','),
            hourStart: strToMinutes(body.hourStart),
            hourEnd: strToMinutes(body.hourEnd),
            useVoiceChannel: body.useVoiceChannel,
        }
    });
    return response.status(201).json(ad);
});

app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const ads = await prisma.ad.findMany({
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
    });
    return response.json(ads.map((ad) => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: minutesToStr(ad.hourStart),
            hourEnd: minutesToStr(ad.hourEnd),
        };
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

app.listen(8080);
