import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor",
                "pageBody": await Preprocessor.loadTemplate("page-home"),
                "previewCardIDs": [
                    479,
                    489,
                    338,
                    486,
                    621
                ],
                "catchphrase": "Ein Sammelkartenspiel",
                "summaryText": "Tauche ein in ein einzigartiges Sammelkartenspiel, das die unvergesslichsten Momente Deiner LARP-Erlebnisse zum Leben erweckt. Werde Teil der Gemeinschaft und gestalte die Welt des Spiels aktiv mit.",
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
                        "url": "https://anor.cards/tcg-arena/",
                        "target": "_blank",
                    }
                ],
                "starterDecksTitle": "Starterdecks",
                "starterDecksText": "Die ersten Starterdecks sind nun verfügbar!",
                "starterDeckButtons": [
                    {
                        "icon": "/public/assets/anor-a.webp",
                        "text": "Jetzt bestellen",
                        "url": "https://w1a.notion.site/vorbestellung-anor-starter-decks",
                        "target": "_blank",
                    },
                ],
                "worldbuildingTitle": "Viele Welten,<br/>ein System",
                "worldbuildingText": "Unser eigens entwickeltes Spielsystem wurde geschaffen, um unterschiedlichste Fantasy-Welten und -Charaktere nahtlos miteinander zu verbinden. Auch dein Charakter findet seinen Platz im Spiel: als individuelle Karte, basierend darauf, was ihn am stärksten prägt. Die Regeln sind leicht zugänglich – das Meistern fordert strategisches Geschick.",
                "worldbuildingButtons": [
                    {
                        "text": "Regelwerk lesen",
                        "url": "https://w1a.notion.site/tcg-spielregeln",
                        "target": "_blank",
                    },
                ],
                "kinds": [
                    {
                        "title": "Charakter",
                        "description": "Charaktere sind das Herz Deiner Strategie. Sie führen Angriffe aus, verteidigen Dein Spielfeld und bringen unterschiedlichste, individuelle Fähigkeiten mit.",
                        "cardID": 540,
                    },
                    {
                        "title": "Ereignis",
                        "description": "Ereignisse sind mächtige Einmalaktionen, die sofort wirken. Sie verändern den Spielverlauf plötzlich, sei es zur Unterstützung Deines Plans oder um dem Gegner in die Quere zu kommen.",
                        "cardID": 185,
                    },
                    {
                        "title": "Manifestation",
                        "description": "Manifestationen bringen dauerhafte Effekte ins Spiel. Solange sie bestehen, beeinflussen sie das Geschehen. Doch auch sie können vom Gegner angegriffen und zerstört werden.",
                        "cardID": 461,
                    },
                ],
                "kindsButtons": [
                    {
                        "text": "Kartenliste",
                        "url": "/cards",
                        "target": "_blank",
                    },
                ],
                "playOnlineTitle": "Spiele online,<br/>direkt im Browser",
                "playOnlineText": "Das Spiel wird laufend weiterentwickelt. Du kannst es kostenlos und ohne Anmeldung direkt auf TCG-Arena testen. Wir freuen uns über jede Rückmeldung aus der Community, um das System weiterzuentwickeln.",
                "playOnlineButtons": [
                    {
                        "icon": "/public/assets/tcg-arena-logo.svg",
                        "text": "Online spielen",
                        "url": "https://anor.cards/tcg-arena/",
                        "target": "_blank",
                    },
                    {
                        "icon": "/public/assets/notion-logo.svg",
                        "text": "Anleitung",
                        "url": "https://w1a.notion.site/tcg-arena-anleitung",
                        "target": "_blank",
                    },
                ],
                "characterCreationTitle": "Dein Charakter als Spielkarte",
                "characterCreationText": "Reiche Deinen Charakter ein und wir werden ihn als Karte im Spiel integrieren.",
                "characterCreationButtons": [
                    {
                        "icon": "/public/assets/notion-logo.svg",
                        "text": "Charakter einreichen",
                        "url": "https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105",
                        "target": "_blank",
                    },
                ],
                "joinTitle": "Werde Teil des Teams",
                "joinText": "Dieses Sammelkartenspiel entsteht aus der Community heraus – und Du kannst ein Teil davon sein. Ob mit Testspielen, Kartenentwürfen, Bildkreation oder einfach guten Ideen: Wir freuen uns über alle, die mithelfen wollen, das Spiel gemeinsam weiterzuentwickeln.",
                "joinButtons": [
                    {
                        "icon": "/public/assets/discord-logo.svg",
                        "text": "Kontaktieren",
                        "url": "https://discord.gg/BVQrSYF5jg",
                        "target": "_blank",
                    },
                ],
                "faqTitle": "Meist gefragt",
                "faqItems": [
                    {
                        "question": "Was ist Anor?",
                        "answer": "Anor ist ein LARP-Sammelkartenspiel, das Geschichten, Charaktere und Ereignisse aus unterschiedlichen LARP-Kampagnen und Settings in Kartenform festhält. Jede Karte repräsentiert Charaktere, Lore oder Ereignisse aus verschiedenen LARP-Settings."
                    },
                    {
                        "question": "Für wen ist Anor gedacht?",
                        "answer": "Anor richtet sich an LARP-Spieler, die ihre Charaktere und Geschichten in einem Sammelkartenspiel verewigen möchten, sowie an TCG-Fans, die ein einzigartiges Kartenspiel mit Community-basierten Inhalten suchen."
                    },
                    {
                        "question": "Kann ich eigene Charaktere ins Spiel bringen?",
                        "answer": "Ja! Reiche Deinen LARP-Charakter bei uns ein, und wir arbeiten gemeinsam daran, ihn als individuelle Spielkarte umzusetzen."
                    },
                    {
                        "question": "Wann ist Anor erhältlich?",
                        "answer": "Im kommenden Jahr wird Anor IT sammelbar und OT erhältlich sein. Ihr könnt das Spiel aber jetzt schon online ausprobieren – kostenlos und ohne Anmeldung."
                    },
                    {
                        "question": "Kann ich Anor jetzt schon spielen?",
                        "answer": "Ja! Ihr könnt Anor sofort online spielen – kostenlos und ganz ohne Anmeldung."
                    },
                    {
                        "question": "Kostet das Spiel etwas?",
                        "answer": "Nein, Anor ist ein Non-Profit-Projekt und die Online-Version ist kostenlos verfügbar. Im kommenden Jahr wird eine gedruckte Version folgen. Etwaige Einnahmen dienen ausschließlich dazu, Drittkosten wie den Druck zu decken. Das Projekt lebt zu 100 % vom Community-Engagement."
                    },
                    {
                        "question": "Was bedeutet IT sammelbar und OT erhältlich?",
                        "answer": "IT (In Time) sammelbar bedeutet, dass ihr die Karten im LARP-Spiel sammeln könnt. OT (Off Time) erhältlich bedeutet, dass die Karten auch außerhalb des LARPs als physische Produkte verfügbar sein werden."
                    },
                    {
                        "question": "Ist Anor ein kommerzielles Projekt?",
                        "answer": "Nein, Anor ist ein Non-Profit-Projekt. Alle Einnahmen dienen ausschließlich dazu, Drittkosten wie den Druck der Karten zu decken. Das Projekt lebt zu 100 % vom Community-Engagement."
                    },
                    {
                        "question": "Warum verwendet ihr KI-generierte Bilder?",
                        "answer": "Da wir ein Non-Profit-Projekt sind, nutzen wir KI-Technologie, um trotz begrenztem Budget hochwertige Charakterbilder für unser Kartenspiel zu erstellen. So können wir eine professionelle visuelle Qualität erreichen und das Spiel für alle zugänglich halten."
                    },
                    {
                        "question": "Wie entsteht das Artwork für die Charaktere?",
                        "answer": "Jeder Charakter beginnt mit einem Foto, das dann mit verschiedenen KI-Tools bearbeitet wird. Anschließend verfeinern wir die Bilder in Photoshop, um den finalen Look zu erreichen und sicherzustellen, dass alle Charaktere perfekt zu unserer Spielwelt passen."
                    },
                    {
                        "question": "Wie kann ich mich am Projekt beteiligen?",
                        "answer": "Das Projekt lebt vom Community-Engagement. Ihr könnt eure Charaktere einreichen, das Spiel online testen, Feedback geben und die Community unterstützen."
                    }
                ],
                "footerText": `© ${new Date().getFullYear()} Verein Anor`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}




