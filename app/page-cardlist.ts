import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
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
                    const cards = await Preprocessor.loadCardList("https://itschotsch.github.io/anor/tcg-arena/card-list-public.json");
                    return Object.keys(cards).map(key => cards[key]);
                })(),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}
