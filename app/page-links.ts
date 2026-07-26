import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/share', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");

            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor",
                "pageBody": await Preprocessor.loadTemplate("page-links"),
                "shareButtons": [
                    {
                        "text": "Regelwerk",
                        "url": "https://w1a.notion.site/tcg-spielregeln",
                        "icon": "/public/assets/notion-logo.svg",
                        "background": {
                            "url": "/public/assets/share-link-rules.webp",
                            "position": "right 60%",
                        },
                        "target": "_blank"
                    },
                    {
                        "text": "Charakter einreichen",
                        "url": "https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105",
                        "icon": "/public/assets/notion-logo.svg",
                        "background": {
                            "url": "/public/assets/share-link-character.webp",
                            "position": "right 53%",
                        },
                        "target": "_blank"
                    },
                    {
                        "text": "Webseite",
                        "url": "/",
                        "icon": "/public/assets/anor-a.webp",
                        "background": {
                            "url": "/public/assets/share-link-website.webp",
                            "position": "right 38%",
                        },
                        "target": "_self"
                    },
                    {
                        "text": "Discord",
                        "url": "https://discord.gg/BVQrSYF5jg",
                        "icon": "/public/assets/discord-logo.svg",
                        "background": {
                            "url": "/public/assets/share-link-discord.webp",
                            "position": "right 49%",
                        },
                        "target": "_blank"
                    },
                    {
                        "text": "Instagram",
                        "url": "https://www.instagram.com/anor.karten",
                        "icon": "/public/assets/instagram-logo.svg",
                        "background": {
                            "url": "/public/assets/share-link-instagram.webp",
                            "position": "right 47%",
                        },
                        "target": "_blank"
                    }
                ],
                "footerText": `© ${new Date().getFullYear()} Verein Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}
