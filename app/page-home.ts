import express from 'express';
import {Website as Preprocessor} from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = Preprocessor.preprocessTemplate(template, {
                "websiteName": "LARP-Sammelkartenspiel",
                "pageBody": await Preprocessor.loadTemplate("page-home"),
                "catchphrase": "Ein Sammelkartenspiel für LARP",
                "previewCardIDs": [
                    362,
                    402,
                    406,
                    453,
                    454,
                ],
                "faqTitle": "FAQ",
                "faqItems": [
                    {
                        "question": "Was ist das LARP-Sammelkartenspiel?",
                        "answer": "Unser Sammelkartenspiel wird speziell für die LARP-Gemeinschaft entwickelt und ist perfekt für das Spiel während oder zwischen LARP-Konventen geeignet.",
                    },
                    {
                        "question": "Wie integriert das Spiel die Charaktere von LARP-Spielern?",
                        "answer": "Basierend auf den schönsten LARP-Momenten integrieren wir die Charaktere von LARP-Spielern in unser Spiel, sodass Du sie sammeln und Deine eigene epische Geschichte gestalten kannst.",
                    },
                    {
                        "question": "Welche Inspirationen hat das LARP-Sammelkartenspiel?",
                        "answer": "Die Regeln sind von den großen Sammelkartenspielen inspiriert und speziell auf LARP angepasst, um ein aufregendes und authentisches Spielerlebnis zu bieten.",
                    },
                    {
                        "question": "Wer hat das Projekt ins Leben gerufen?",
                        "answer": "Dieses Projekt wurde von Aetherlab von der LARP-Gemeinschaft für die LARP-Gemeinschaft ins Leben gerufen.",
                    },
                    {
                        "question": "Wie kann ich auf dem Laufenden bleiben?",
                        "answer": "Tritt unserem <a href=\"https://discord.gg/BVQrSYF5jg\">Discord-Server</a> bei, um keine News zu verpassen!",
                    },
                ],
                "rulesTitle": "Regeln",
                "rulesText": "Die Regeln sind von den großen Sammelkartenspielen inspiriert und speziell auf LARP angepasst, um ein aufregendes und authentisches Spielerlebnis zu bieten.",
                "contactTitle": "Kontakt",
                "contactText": "Du kannst uns jederzeit mit dem Discord-Server in unserem <a href=\"https://discord.gg/BVQrSYF5jg\">Discord-Server</a> besprechen.",
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
            });
            res.send(template);
        });
    }

}