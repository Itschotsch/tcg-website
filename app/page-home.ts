import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "LARP TCG",
                "pageBody": await Preprocessor.loadTemplate("page-home"),
                "previewCardIDs": [
                    470,
                    402,
                    406,
                    453,
                    471,
                ],
                "catchphrase": "Ein Sammelkartenspiel",
                "summaryText": "Werde Teil des von der Community entwickelten LARP-Sammelkartenspiels, bei dem Deine Charaktere und Geschichten lebendig werden! Tauche ein in epische Kämpfe, die die besten Momente Deiner LARP-Erlebnisse verewigen. Gestalte die Spielwelt aktiv mit, indem Du Deine eigenen Charaktere einreichst, um sie in einzigartige Karten zu verwandeln.",
                "summaryButtons": [
                    {
                        "icon": "/public/assets/discord-logo.svg",
                        "text": "Discord beitreten",
                        "url": "https://discord.gg/BVQrSYF5jg",
                        "target": "_blank",
                    },
                    {
                        "icon": "/public/assets/tcg-arena-logo.svg",
                        "text": "Online spielen",
                        "url": "https://tcg-arena.fr/load/aHR0cHMlM0ElMkYlMkZpdHNjaG90c2NoLmdpdGh1Yi5pbyUyRnRjZy1tYWtlciUyRnRjZy1hcmVuYSUyRm1haW4uanNvbg",
                        "target": "_blank",
                    }
                ],
                "worldbuildingTitle": "Viele Welten,<br/>ein System",
                "worldbuildingText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "worldbuildingButtons": [
                    {
                        "text": "Regelwerk",
                        "url": "https://w1a.notion.site/tcg-spielregeln",
                        "target": "_blank",
                    },
                ],
                "kinds": [
                    {
                        "title": "Charakter",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                        "cardID": 470,
                    },
                    {
                        "title": "Ereignis",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                        "cardID": 470,
                    },
                    {
                        "title": "Manifestation",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
                        "cardID": 470,
                    },
                ],
                "kindsButtons": [
                    {
                        "text": "Kartenliste",
                        "url": "/cards",
                        "target": "_blank",
                    },
                ],
                "playOnlineTitle": "Spiele online",
                "playOnlineText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                "playOnlineButtons": [
                    {
                        "icon": "/public/assets/tcg-arena-logo.svg",
                        "text": "Online spielen",
                        "url": "https://tcg-arena.fr/load/aHR0cHMlM0ElMkYlMkZpdHNjaG90c2NoLmdpdGh1Yi5pbyUyRnRjZy1tYWtlciUyRnRjZy1hcmVuYSUyRm1haW4uanNvbg",
                        "target": "_blank",
                    },
                    {
                        "icon": "/public/assets/notion-logo.svg",
                        "text": "Anleitung",
                        "url": "https://w1a.notion.site/tcg-arena-anleitung",
                        "target": "_blank",
                    },
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
                    {
                        "question": "Kann ich irgendwo sehen, welche Karten es gibt?",
                        "answer": "Ja, es gibt eine <a href=\"/cards\">Liste der Karten im Playtest</a>.",
                    },
                ],
                "rulesTitle": "Regeln",
                "rulesText": "Die Regeln sind von den großen Sammelkartenspielen inspiriert und speziell auf LARP angepasst, um ein aufregendes und authentisches Spielerlebnis zu bieten. Lorem ipsum odor amet, consectetuer adipiscing elit. Per sociosqu maximus neque torquent mus primis nunc. Arcu netus facilisi porttitor torquent ultrices sagittis scelerisque tempor. Quisque pretium interdum sagittis class dictumst. Luctus elementum integer cubilia tellus lorem. Facilisi per est lectus nam dis. Lacus phasellus dictum sociosqu dolor nibh; non penatibus.<br/>Dignissim sapien auctor mauris; molestie cras mattis. Ultrices sit lacus auctor elementum leo. Ipsum tempus proin torquent proin placerat massa habitant ut cursus. Volutpat velit faucibus cursus habitant cubilia suspendisse sed fringilla. Dictumst inceptos ultricies est proin mus erat lectus. Fringilla neque diam sollicitudin diam, vulputate et. Euismod adipiscing faucibus ridiculus accumsan massa mi porttitor sagittis consequat.",
                "contactTitle": "Kontakt",
                "contactText": "Du kannst uns jederzeit mit dem Discord-Server in unserem <a href=\"https://discord.gg/BVQrSYF5jg\">Discord-Server</a> besprechen.",
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}