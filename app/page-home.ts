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
                        "icon": "/public/assets/anor-a.webp",
                        "text": "Jetzt mitmachen",
                        "url": "/mitmachen",
                        "target": "_self",
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
                        "icon": "/public/assets/anor-a.webp",
                        "text": "Jetzt mitmachen",
                        "url": "/mitmachen",
                        "target": "_self",
                    },
                ],
                "faqTitle": "Meist gefragt",
                "faqItems": [
                    {
                        "question": "Was ist Anor?",
                        "answer": "Anor ist ein Sammelkartenspiel. Es spielt sich ähnlich und doch erstaunlich anders als andere bekannte Sammelkartenspiele. Dazu kommt: Inhaltlich erzählt es von Geschichten, Charakteren und Momenten aus den unterschiedlichsten LARP-Kampagnen und -Welten. Die Karten repräsentieren Dinge und Momente, die so im Spiel erlebt wurden."
                    },
                    {
                        "question": "Für wen ist Anor gedacht?",
                        "answer": "Anor ist etwas für alle, die gerne Sammelkartenspiele spielen oder sammeln. Inhaltlich richtet es sich natürlich an LARP-Spieler, die ihre Charaktere und Geschichten in einem Sammelkartenspiel verewigen möchten, aber uns ist es wichtig, dass Anor auch außerhalb des LARPs und von Nicht-LARPern genauso gespielt und genossen werden kann."
                    },
                    {
                        "question": "Wie fange ich mit Anor an?",
                        "answer": "Am einfachsten probierst Du Anor kostenlos <a href=\"https://anor.cards/tcg-arena/\" target=\"_blank\">online auf TCG-Arena</a> aus. Im <a href=\"https://w1a.notion.site/tcg-spielregeln\" target=\"_blank\">Regelwerk</a> findest Du alles, was Du zum Spielen wissen musst. Die Regeln sind leicht zugänglich, und bei Fragen hilft Dir die Community auf unserem <a href=\"https://discord.gg/BVQrSYF5jg\" target=\"_blank\">Discord-Server</a>."
                    },
                    {
                        "question": "Wie kann ich Anor spielen?",
                        "answer": "Zusätzlich zum physischen Spiel kann Anor auch vollkommen kostenlos und ohne Anmeldung <a href=\"https://anor.cards/tcg-arena/\" target=\"_blank\">online gespielt werden</a>. Wie das funktioniert, zeigt die <a href=\"https://w1a.notion.site/tcg-arena-anleitung\" target=\"_blank\">TCG-Arena-Anleitung</a>, und alle Regeln findest Du im <a href=\"https://w1a.notion.site/tcg-spielregeln\" target=\"_blank\">Regelwerk</a>. Spielpartner finden sich zahlreich auf unserem <a href=\"https://discord.gg/BVQrSYF5jg\" target=\"_blank\">Anor-Discord-Server</a>."
                    },
                    {
                        "question": "Kostet das Spiel etwas?",
                        "answer": "Anor ist ein Freizeitprojekt. Die Online-Version ist vollkommen kostenlos verfügbar. Ebenso die Karten, die an größeren Cons IT erspielt werden können. Die Einnahmen aus den gedruckten Produkten decken die Druck- und Produktionskosten und finanzieren die IT verteilten Karten mit. Das Projekt lebt also vollkommen von der Gemeinschaft."
                    },
                    {
                        "question": "Wann ist Anor erhältlich?",
                        "answer": "<a href=\"https://w1a.notion.site/vorbestellung-anor-starter-decks\" target=\"_blank\">Die ersten Starterdecks sind schon verfügbar!</a> Du bestellst sie über das Formular vor, holst sie an einem Event wie dem Drachenfest oder dem ConQuest of Mythodea ab und bezahlst dort bar. Zusätzlich bringen unzählige Spielmacher auf den großen Cons schon länger Karten ins Spiel, die IT erspielt werden können."
                    },
                    {
                        "question": "Wie bekomme ich Karten im LARP?",
                        "answer": "Im LARP kannst Du Loot Packs mit je zwei zufälligen Karten erspielen. Händler, Questgeber und Spielmacher bringen sie IT ins Spiel, etwa als Belohnung für gutes Rollenspiel, für erfüllte Aufgaben oder als Beute. OT werden Loot Packs nicht verkauft."
                    },
                    {
                        "question": "Kann ich eigene Charaktere ins Spiel bringen?",
                        "answer": "Ja! <a href=\"https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105\" target=\"_blank\">Reiche Deinen Charakter bei uns ein</a>, und wir arbeiten gemeinsam daran, ihn als individuelle Spielkarte umzusetzen."
                    },
                    {
                        "question": "Was bedeutet IT sammelbar und OT erhältlich?",
                        "answer": "<i>IT sammelbar</i> bedeutet, dass die Karten im LARP-Spiel gesammelt und gehandelt werden können. Unzählige freiwillige Spielmacher bringen Karten ins Spiel, etwa als Belohnung für Aufgaben oder als Beute im Kampf. Die im Spiel sammelbaren Karten sind speziell markiert, aber natürlich mit den anderen Karten kompatibel. <i>OT erhältlich</i> bedeutet, dass Karten, <a href=\"https://w1a.notion.site/vorbestellung-anor-starter-decks\" target=\"_blank\">wie etwa die Starterdecks</a>, auch außerhalb des LARPs als physische Produkte angeboten werden."
                    },
                    {
                        "question": "Wie entstehen Bilder und andere Inhalte?",
                        "answer": "Wir machen, was wir können, selbst. So sind etwa Kartentexte, Elementsymbole und andere grafische Elemente, der ganze Balanceprozess, und auch diese Webseite etc. menschlich entstanden. Bei der Erstellung von Kartenbildern setzen wir gezielt KI-Werkzeuge ein und iterieren dann, auch durch händisches Übermalen, bis sie unseren Qualitätsansprüchen gerecht werden. Es ist uns schlicht nicht möglich, menschliche Künstler bei dieser großen Anzahl an Bildern adäquat zu entlöhnen."
                    },
                    {
                        "question": "Wie entstehen die Charakterbilder?",
                        "answer": "Jeder Charakter beginnt mit Referenzfotos, die die jeweilige Person einsendet. Diese Fotos werden dann von uns bearbeitet, unter anderem mithilfe von KI und anderen Werkzeugen. Anschließend verfeinern wir die Bilder, etwa in Photoshop, bis wir mit der Darstellung zufrieden sind und der Charakter perfekt in die Spielwelt passt."
                    },
                    {
                        "question": "Wie kann ich mich am Projekt beteiligen?",
                        "answer": "Anor lebt von der Gemeinschaft. Ob Playtesting, Artwork, Community Building oder eine ganz eigene Idee: Auf unserer <a href=\"/mitmachen\">Mitmachen-Seite</a> erfährst Du, wie Du dabei sein kannst."
                    },
                    {
                        "question": "Muss ich etwas Bestimmtes können, um mitzumachen?",
                        "answer": "Nein. Neugier und Lust, etwas beizutragen, genügen, und auch wer etwas erst lernt, ist willkommen. Du möchtest erst einmal ohne Aufgabe dabei sein? Dann komm einfach auf unseren <a href=\"https://discord.gg/BVQrSYF5jg\" target=\"_blank\">Discord-Server</a>."
                    },
                    {
                        "question": "Wer steht hinter Anor?",
                        "answer": "Hinter Anor steht der Verein Anor, ein gemeinnütziger Schweizer Verein. Er verfolgt keine Erwerbszwecke: Überschüsse fließen ausschließlich in die Vereinszwecke."
                    }
                ],
                "footerText": `© ${new Date().getFullYear()} Verein Anor ✦ Stand: 7. August 2026`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}




