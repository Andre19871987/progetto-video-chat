import prisma from '../db/client';
import bcrypt from 'bcrypt';
import { Stato_Utente } from '../models/types';

const main = async (): Promise<void> => {
/*
    await prisma.user.create({
        data: {
            nome: 'Gianfranco',
            cognome: 'Lo Presti',
            username: 'gianfranco-lo-presti',
            telefono: '335 2345678',
            indirizzo: 'viale delle rose, 15 00100 Roma',
            email: 'gianfranco.lopresti@example.com',
            password: await bcrypt.hash('Pwd#gianfranco-lo-presti', 12),
            immagine: 'm01.png',
            flagAdmin: true,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Franco',
            cognome: 'Neri',
            username: 'franco-neri',
            telefono: '337 3456789',
            indirizzo: 'via dei fiori, 15 00100 Roma',
            email: 'franco.neri@example.com',
            password: await bcrypt.hash('Pwd#franco-neri', 12),
            immagine: 'm02.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Giulia',
            cognome: 'Bianchi',
            username: 'giulia-bianchi',
            telefono: '337 1234567',
            indirizzo: 'via della libertà 15 00100 Roma',
            email: 'giulia.bianchi@example.com',
            password: await bcrypt.hash('Pwd#giulia-bianchi', 12),
            immagine: 'f01.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Mario',
            cognome: 'Rossi',
            username: 'mario-rossi',
            telefono: '338 2345678',
            indirizzo: 'viale Francia 15 00100 Roma',
            email: 'mario.rossi@example.com',
            password: await bcrypt.hash('Pwd#mario-rossi', 12),
            immagine: 'm03.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Onofrio',
            cognome: 'Bianchi',
            username: 'onofrio-bianchi',
            telefono: '337 4567890',
            indirizzo: 'via del piffero, 15 00100 Roma',
            email: 'onofrio.bianchi@example.com',
            password: await bcrypt.hash('Pwd#onofrio-bianchi', 12),
            immagine: 'm04.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Pasquale',
            cognome: 'Verdi',
            username: 'pasquale-verdi',
            telefono: '335 1234567',
            indirizzo: 'via deli liutai 15 00100 Roma',
            email: 'pasquale.verdi@example.com',
            password: await bcrypt.hash('Pwd#pasquale-verdi', 12),
            immagine: 'm05.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Camillo',
            cognome: 'Rossi',
            username: 'camillo-rossi',
            telefono: '339 1234567',
            indirizzo: 'via della rivoluzione 15 00100 Roma',
            email: 'camillo.rossi@example.com',
            password: await bcrypt.hash('Pwd#camillo-rossi', 12),
            immagine: 'm06.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });

    await prisma.user.create({
        data: {
            nome: 'Carla',
            cognome: 'Bianchi',
            username: 'carla-bianchi',
            telefono: '338 56789012',
            indirizzo: 'via della musica 15 00100 Roma',
            email: 'carla.bianchi@example.com',
            password: await bcrypt.hash('Pwd#giulia-bianchi', 12),
            immagine: 'f02.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });
*/

    //---  Stanze
/*
    const utenti = await prisma.user.findMany({
        select: {id: true}
    });




    for(int x = 0; x < utenti.length; x++) {




    }


    utenti.forEach( utente => )


    await prisma.user.create({
        data: {
            nome: 'Carla',
            cognome: 'Bianchi',
            username: 'carla-bianchi',
            telefono: '338 56789012',
            indirizzo: 'via della musica 15 00100 Roma',
            email: 'carla.bianchi@example.com',
            password: await bcrypt.hash('Pwd#giulia-bianchi', 12),
            immagine: 'f02.png',
            flagAdmin: false,
            flagStato: Stato_Utente.OFFLINE
        }
    });



    console.log(utenti);
    id               Int             @id @default(autoincrement())
    stanzaFlagGruppo Boolean         @default(false)
*/
 };

main();
