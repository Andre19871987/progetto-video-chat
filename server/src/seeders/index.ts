import prisma from '../db/client';
import bcrypt from 'bcrypt';
import { UserState } from '../models/types';

const main = async (): Promise<void> => {
/*
    await prisma.user.create({
        data: {
            name: 'Gianfranco Lo Presti',
            username: 'gianfranco-lo-presti',
            phone: '335 2345678',
            address: 'viale delle rose, 15 00100 Roma',
            email: 'gianfranco.lopresti@example.com',
            password: await bcrypt.hash('Pwd#gianfranco-lo-presti', 12),
            img: 'm01.png',
            flagAdmin: true,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Franco Neri',
            username: 'franco-neri',
            phone: '337 3456789',
            address: 'via dei fiori, 15 00100 Roma',
            email: 'franco.neri@example.com',
            password: await bcrypt.hash('Pwd#franco-neri', 12),
            img: 'm02.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Giulia Bianchi',
            username: 'giulia-bianchi',
            phone: '337 1234567',
            address: 'via della libertà 15 00100 Roma',
            email: 'giulia.bianchi@example.com',
            password: await bcrypt.hash('Pwd#giulia-bianchi', 12),
            img: 'f01.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Mario Rossi',
            username: 'mario-rossi',
            phone: '338 2345678',
            address: 'viale Francia 15 00100 Roma',
            email: 'mario.rossi@example.com',
            password: await bcrypt.hash('Pwd#mario-rossi', 12),
            img: 'm03.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Onofrio Bianchi',
            username: 'onofrio-bianchi',
            phone: '337 4567890',
            address: 'via del piffero, 15 00100 Roma',
            email: 'onofrio.bianchi@example.com',
            password: await bcrypt.hash('Pwd#onofrio-bianchi', 12),
            img: 'm04.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Pasquale Verdi',
            username: 'pasquale-verdi',
            phone: '335 1234567',
            address: 'via deli liutai 15 00100 Roma',
            email: 'pasquale.verdi@example.com',
            password: await bcrypt.hash('Pwd#pasquale-verdi', 12),
            img: 'm05.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Camillo Rossi',
            username: 'camillo-rossi',
            phone: '339 1234567',
            address: 'via della rivoluzione 15 00100 Roma',
            email: 'camillo.rossi@example.com',
            password: await bcrypt.hash('Pwd#camillo-rossi', 12),
            img: 'm06.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            name: 'Carla Bianchi',
            username: 'carla-bianchi',
            phone: '338 56789012',
            address: 'via della musica 15 00100 Roma',
            email: 'carla.bianchi@example.com',
            password: await bcrypt.hash('Pwd#giulia-bianchi', 12),
            img: 'f02.png',
            flagAdmin: false,
            flagStatus: UserState.OFFLINE
        }
    });


*/

await prisma.user.create({
    data: {
        name: 'Andreia Donzelli',
        username: 'andreia-donzelli',
        phone: '337 3987789',
        address: 'via dei fiori, 15 00100 Roma',
        email: 'andreia.donzelli@example.com',
        password: await bcrypt.hash('Pwd#andreia-donzelli', 12),
        img: 'f02.png',
        flagAdmin: false,
        flagStatus: UserState.OFFLINE
    }
});


await prisma.user.create({
    data: {
        name: 'Salvatore Spinoccia',
        username: 'salvatore-spinoccia',
        phone: '337 3456876',
        address: 'via dei fiori, 15 00100 Roma',
        email: 'salvatore.spinoccia@example.com',
        password: await bcrypt.hash('Pwd#salvatore-spinoccia', 12),
        img: 'm02.png',
        flagAdmin: false,
        flagStatus: UserState.OFFLINE
    }
});



};

main();
