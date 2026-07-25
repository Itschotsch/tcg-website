import express from 'express';
import { Website as Preprocessor } from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/starter-decks', async (req, res) => {
            let template: string = await Preprocessor.loadTemplate("page-scaffold");
            template = await Preprocessor.preprocessTemplate(template, {
                "websiteName": "Anor – Starter Decks",
                "pageBody": await Preprocessor.loadTemplate("page-starterdecks"),
                "heroTitle": "Anor Starter Decks",
                "heroText": "Unser eigens entwickeltes Spielsystem wurde geschaffen, um unterschiedlichste Fantasy-Welten und Charaktere nahtlos miteinander zu verbinden. Auch dein Charakter findet seinen Platz im Spiel: als individuelle Karte, basierend auf dem Element, welches sein Wesen prägt. Die Regeln sind leicht zugänglich, doch die Meisterung fordert strategisches Geschick.",
                "heroButtonText": "Jetzt vorbestellen",
                "heroButtonUrl": "https://discord.gg/BVQrSYF5jg",
                "heroButtonTarget": "_blank",
                "starterDecks": [
                    {
                        "eyebrow": "Starter Deck I",
                        "title": "Schwert & Feder",
                        "description": "Ein ausgewogenes Deck für Einsteiger, das Nahkampf-Charaktere mit unterstützenden Ereigniskarten kombiniert. Ideal, um die Grundlagen des Spielsystems kennenzulernen und erste Strategien auszuprobieren.",
                        "price": "€ 20",
                        "image": "/public/assets/starterdeck-pack-placeholder.webp"
                    },
                    {
                        "eyebrow": "Starter Deck II",
                        "title": "Stürmisches Heer",
                        "description": "Ein aggressives Deck rund um schnelle Angriffe und das Element Aeris. Charaktere und Ereignisse wirken zusammen, um den Gegner unter Dauerdruck zu setzen, bevor er sich formieren kann.",
                        "price": "€ 20",
                        "image": "/public/assets/starterdeck-pack-placeholder.webp"
                    },
                    {
                        "eyebrow": "Starter Deck III",
                        "title": "Magischer Wall",
                        "description": "Ein defensives Deck, das auf Manifestationen und magische Verstärkung setzt. Wer geduldig spielt und das Feld kontrolliert, zwingt den Gegner zu Fehlern.",
                        "price": "€ 20",
                        "image": "/public/assets/starterdeck-pack-placeholder.webp"
                    },
                    {
                        "eyebrow": "Starter Deck IV",
                        "title": "Flammendes Erbe",
                        "description": "Ein Deck für risikofreudige Spieler, das die volle Kraft des Elements Ignis entfesselt. Hoher Schaden trifft auf hohe Kosten – wer das Gleichgewicht meistert, dominiert das Spielfeld.",
                        "price": "€ 20",
                        "image": "/public/assets/starterdeck-pack-placeholder.webp"
                    }
                ],
                "bundleEyebrow": "Starter Deck Bundle",
                "bundleTitle": "So kommst du an die Starter Decks",
                "bundleText": "Alle vier Starter Decks erscheinen gemeinsam mit dem physischen Kartenspiel. Sichere dir jetzt schon deinen Platz in der Vorbestellung und erhalte dein Deck, sobald der Druck abgeschlossen ist.",
                "bundleHighlight": "Keine Angst, falls es zeitlich nicht klappt – komm einfach in unseren Discord und kontaktiere uns dort.",
                "bundleButtonText": "Jetzt vorbestellen",
                "bundleButtonUrl": "https://discord.gg/BVQrSYF5jg",
                "bundleButtonTarget": "_blank",
                "footerText": `© ${new Date().getFullYear()} Verein Aetherlab`,
                "loadTemplate": Preprocessor.loadTemplate,
            });
            res.send(template);
        });
    }

}
