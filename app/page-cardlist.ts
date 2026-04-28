import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            let cardlistFile = "https://itschotsch.github.io/anor/tcg-arena/card-list-public.json";
            if (req.query.cardlist) {
                cardlistFile = `https://itschotsch.github.io/anor/tcg-arena/card-list-${req.query.cardlist.toString()}.json`;
            }
            let cardlistName: string = "Alle Karten";
            if (req.query.cardlist) {
                cardlistName = req.query.cardlist.toString().charAt(0).toUpperCase() + req.query.cardlist.toString().slice(1);
            }

            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor – Kartenliste",
                "pageBody": await Preprocessor.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "returnToMainPage": "Zurück",
                "cardlistName": cardlistName,
                "cardData": await (async () => {
                    try {
                        const cards = await Preprocessor.loadCardList(cardlistFile);
                        return Object.keys(cards).map(key => cards[key]);
                    } catch (error) {
                        console.error("Error loading card list:", error);
                        return [];
                    }
                })(),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}
