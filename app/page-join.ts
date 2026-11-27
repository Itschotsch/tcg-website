import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/mitmachen', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");

            const formButtons = [
                {
                    "icon": "/public/assets/notion-logo.svg",
                    "text": "Jetzt mitmachen",
                    "url": "https://w1a.notion.site/6b395bba56ba83ab8e4681e01ae9547f?pvs=105",
                    "target": "_blank",
                },
            ];

            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor",
                "pageBody": await Preprocessor.loadTemplate("page-join"),
                "introTitle": "Gestalte Anor mit",
                "introText": "Anor ist ein Spiel von der Community für die Community. Es lebt von Menschen, die ihre Ideen, ihre Zeit und ihr Können einbringen. Ob Du seit Jahren Sammelkartenspiele spielst oder gerade erst neugierig geworden bist: Bei uns kannst Du die Welt von Anor aktiv mitgestalten.",
                "introButtons": formButtons,
                "waysTitle": "So kannst Du mitmachen",
                "ways": [
                    {
                        "title": "Playtesting",
                        "description": "Probiere neue Karten und Regeln aus, am Spieltisch oder kostenlos online auf TCG-Arena. Deine Rückmeldungen zeigen uns, was Spaß macht, was noch hakt und wo die Balance nicht stimmt.",
                        "image": "/public/assets/join-background.webp",
                        "imageFit": "cover",
                    },
                    {
                        "title": "Artwork",
                        "description": "Jede Karte braucht ein Bild, das ihre Geschichte erzählt. Hilf uns, Kartenbilder zu erschaffen und zu verfeinern. Wir setzen dabei gezielt KI-Werkzeuge ein und überarbeiten die Ergebnisse, auch von Hand, bis sie unseren Ansprüchen genügen.",
                        "image": "/public/assets/character-creation-desktop.webp",
                        "imageFit": "contain",
                    },
                    {
                        "title": "Community Building",
                        "description": "Bringe Menschen an einen Tisch: Organisiere Turniere, erkläre anderen die Regeln und erleichtere ihnen so den Einstieg. Oder hilf uns beim Marketing, damit noch mehr Leute Anor entdecken.",
                        "image": "/public/assets/share-link-instagram.webp",
                        "imageFit": "cover",
                    },
                ],
                "discordTitle": "Wir treffen uns<br/>auf Discord",
                "discordText": "Wir organisieren uns über unseren Discord-Server. Hier tauschen wir Ideen aus, stimmen uns ab und finden Spielpartner. Du kannst auch einfach vorbeischauen und die Community kennenlernen, ganz ohne eine Aufgabe zu übernehmen.",
                "discordButtons": [
                    {
                        "icon": "/public/assets/discord-logo.svg",
                        "text": "Discord beitreten",
                        "url": "https://discord.gg/BVQrSYF5jg",
                        "target": "_blank",
                    },
                ],
                "outroTitle": "Lust mitzumachen?",
                "outroText": "Dann melde Dich über unser Formular. Wir setzen uns mit Dir in Verbindung und finden gemeinsam heraus, wie Du Dich einbringen möchtest.",
                "outroButtons": formButtons,
                "footerText": `© ${new Date().getFullYear()} Verein Anor`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}
