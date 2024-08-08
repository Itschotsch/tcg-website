import express from 'express';
import {Website as Preprocessor} from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/cards', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = Preprocessor.preprocessTemplate(template, {
                "websiteName": "LARP-Sammelkartenspiel",
                "pageBody": await Preprocessor.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "cardlistAllTitle": "Alle Karten",
                "cardData": await Preprocessor.loadCSV("Alle Karten 70ddd0aaafb74f56b205e643b0901290_all"),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
            });
            res.send(template);
        });
    }

}