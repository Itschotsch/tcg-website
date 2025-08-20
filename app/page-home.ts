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
                    407,
                    406,
                    188,
                    485
                ],
                "catchphrase": "Ein Sammelkartenspiel",
                "summaryText": "Tauche ein in ein einzigartiges Sammelkartenspiel, das die unvergesslichsten Momente Deiner LARP-Erlebnisse zum Leben erweckt. Werde Teil einer der Community und gestalte die Welt des Spiels aktiv mit.",
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
                        "cardID": 484,
                    },
                    {
                        "title": "Ereignis",
                        "description": "Ereignisse sind mächtige Einmalaktionen, die sofort wirken. Sie verändern den Spielverlauf plötzlich, sei es zur Unterstützung Deines Plans oder um dem Gegner in die Quere zu kommen.",
                        "cardID": 460,
                    },
                    {
                        "title": "Manifestation",
                        "description": "Manifestationen bringen dauerhafte Effekte ins Spiel. Solange sie bestehen, beeinflussen sie das Geschehen. Doch auch sie können vom Gegner angegriffen und zerstört werden.",
                        "cardID": 197,
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
                "playOnlineText": "Das Spiel befindet sich aktuell in der Betaphase. Du kannst es kostenlos und ohne Anmeldung direkt auf TCG-Arena testen. Wir freuen uns über jede Rückmeldung aus der Community, um das System weiterzuentwickeln.",
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
                "characterCreationTitle": "Dein Charakter als Spielkarte",
                "characterCreationText": "Reiche Deinen Charakter ein und wir werden sie als Karte im Spiel integrieren.",
                "characterCreationButtons": [
                    {
                        "icon": "/public/assets/notion-logo.svg",
                        "text": "Charakter einreichen",
                        "url": "https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105",
                        "target": "_blank",
                    },
                ],
                "joinTitle": "Werde Teil des Teams",
                "joinText": "Dieses Sammelkartenspiel entsteht aus der Community heraus – und Du kannst ein Teil davon sein. Ob mit Playtesting, Kartendesign, Artwork oder einfach guten Ideen: Wir freuen uns über alle, die mithelfen wollen, das Spiel gemeinsam weiterzuentwickeln.",
                "joinButtons": [
                    {
                        "icon": "/public/assets/discord-logo.svg",
                        "text": "Kontaktieren",
                        "url": "https://discord.gg/BVQrSYF5jg",
                        "target": "_blank",
                    },
                ],
                "faqTitle": "FAQ",
                "faqItems": [
                    {
                        "question": "Was ist dieses TCG?",
                        "answer": "Es ist ein Sammelkartenspiel, das auf Charakteren und Geschichten aus dem Live Action Roleplay basiert. Es vereint taktisches Kartenspiel mit der LARP-Community."
                    },
                    {
                        "question": "Wie kann ich mitspielen?",
                        "answer": "Du kannst direkt im Browser auf TCG-Arena spielen – kostenlos und ohne Anmeldung. Außerdem kannst Du Dir das Regelwerk durchlesen und jederzeit gerne Feedback geben."
                    },
                    {
                        "question": "Kann ich eigene Charaktere ins Spiel bringen?",
                        "answer": "Ja! Reiche Deinen LARP-Charakter bei uns ein, und wir arbeiten gemeinsam daran, ihn als individuelle Spielkarte umzusetzen."
                    },
                    {
                        "question": "Kostet das Spiel etwas?",
                        "answer": "Nein, das Spiel ist aktuell kostenlos verfügbar. Wir entwickeln es gemeinsam mit der Community weiter und freuen uns über jede Teilnahme."
                    },
                    {
                        "question": "Wie funktioniert das mit den verschiedenen Welten?",
                        "answer": "Unser Spielsystem ist so entworfen, dass Charaktere aus unterschiedlichen Settings miteinander kompatibel sind – unabhängig von Welt, Zeit oder Magiesystem."
                    },
                    {
                        "question": "Wie kann ich Teil des Entwicklerteams werden?",
                        "answer": "Schließe Dich unserem Discord an und melde Dich bei uns! Egal ob Playtesting, Game Design, Balancing oder Art – wir freuen uns über jede Unterstützung."
                    }
                ],
                "footerText": `© ${new Date().getFullYear()} Verein Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}

