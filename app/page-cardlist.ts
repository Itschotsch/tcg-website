import express from 'express';
import {Website as Preprocessor} from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Ark Chronika",
                "pageBody": await Preprocessor.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "cardlistAllTitle": "Alle Karten",
                "cardData": maskCardData(
                    await Preprocessor.loadCSV("Alle Karten 70ddd0aaafb74f56b205e643b0901290_all"),
                    (await Preprocessor.loadCommasSeparatedList("cardlist-whitelist")).sort()
                ),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

    function maskCardData(cardData: { [key: string]: string }[], cardIDs: string[]): { [key: string]: string }[] {
        let newCardData: { [key: string]: string }[] = [];
        console.log(cardIDs);
        for (let card of cardData) {
            if (cardIDs.includes(card.ID)) {
                newCardData.push(card);
            }
        }
        return newCardData;
    }

}