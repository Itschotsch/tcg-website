import express from 'express';
import {Website as Preprocessor} from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            let cardlistName: string = (req.query.cardlist || "playtest").toString();
            let cardlistFile: string = "cardlist-" + cardlistName;

            // Check whether cardlist actually exists
            if (!await Preprocessor.commasSeparatedListExists(cardlistFile)) {
                res.status(404).send("Cardlist not found.");
                return;
            }

            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Ark Chronika",
                "pageBody": await Preprocessor.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "cardlistName": cardlistName.charAt(0).toUpperCase() + cardlistName.slice(1),
                "cardData": maskCardData(
                    await Preprocessor.loadCSV("Alle Karten 70ddd0aaafb74f56b205e643b0901290_all"),
                    (await Preprocessor.loadCommasSeparatedList(cardlistFile)).sort()
                ),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

    function maskCardData(cardData: { [key: string]: string }[], cardIDs: string[]): { [key: string]: string }[] {
        let newCardData: { [key: string]: string }[] = [];
        for (let card of cardData) {
            if (cardIDs.includes(card.ID)) {
                newCardData.push(card);
            }
        }
        return newCardData;
    }

}