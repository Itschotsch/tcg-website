import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            let cardlistName: string = (req.query.cardlist || "playtest").toString();
            let cardlistFile: string = "cardlist-" + cardlistName;

            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Ark Chronika",
                "pageBody": await Preprocessor.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "cardlistName": cardlistName.charAt(0).toUpperCase() + cardlistName.slice(1),
                "cardData": maskCardData(
                    await Preprocessor.loadCSV(),
                    (await Preprocessor.loadCardList("https://itschotsch.github.io/tcg-maker/tcg-arena/card-list-public.json"))
                ),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

    // {
    //     "3": {
    //         "id": "3",
    //         "name": "Weißer Greif",
    //         "type": "Charakter",
    //         "Element": "Aeris",
    //         "cost": 6,
    //         "face": {
    //             "front": {
    //                 "name": "Weißer Greif",
    //                 "type": "Charakter",
    //                 "cost": 6,
    //                 "image": "https://itschotsch.github.io/tcg-maker/tcg-arena/images/public/3.jpg"
    //             }
    //         }
    //     },
    //     ...
    function maskCardData(cardData: { [key: string]: string }[], cards: { [key: string]: any }): { [key: string]: string }[] {
        let cardDataIDs: string[] = cardData.map(x => x.ID);
        let newCardData: { [key: string]: string }[] = [];
        for (let cardID of cards.keys()) {
            if (cardID in cardDataIDs) {
                newCardData.push(cards[cardID]);
            }
        }
        return newCardData;
    }

}