import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    // Edit this list to change the links shown on /share — each entry needs
    // a title, a link (internal path or full URL), and a background image
    // (a file under /public/assets, referenced as "/public/assets/...").
    export const shareLinks: { title: string, link: string, image: string }[] = [
        {
            title: "Regelwerk",
            link: "https://w1a.notion.site/tcg-spielregeln",
            image: "/public/assets/worldbuilding-background.webp",
        },
        {
            title: "Charakter einreichen",
            link: "https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105",
            image: "/public/assets/character-profiles.webp",
        },
        {
            title: "Website",
            link: "/",
            image: "/public/assets/summary-background.webp",
        },
        {
            title: "Discord beitreten",
            link: "https://discord.gg/BVQrSYF5jg",
            image: "/public/assets/battlefield-background.webp",
        },
        {
            title: "Instagram",
            link: "https://instagram.com/anor.tcg",
            image: "/public/assets/join-background.webp",
        },
    ];

    export function register(app: express.Express) {
        app.get('/share', async (req: express.Request, res: express.Response) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor – Links",
                "pageBody": await Preprocessor.loadTemplate("page-share"),
                "shareLinks": shareLinks,
            });
            res.send(template);
        });
    }

}
