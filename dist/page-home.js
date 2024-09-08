"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Website = void 0;
const preprocessor_1 = require("./preprocessor");
var Website;
(function (Website) {
    function register(app) {
        app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let template = yield preprocessor_1.Website.loadTemplate("page-scaffold");
            template = yield preprocessor_1.Website.preprocessTemplate(template, {
                "websiteName": "Ark Chronika",
                "pageBody": yield preprocessor_1.Website.loadTemplate("page-home"),
                "catchphrase": "Ein LARP-Sammelkartenspiel",
                "previewCardIDs": [
                    362,
                    402,
                    406,
                    453,
                    454,
                ],
                "summary": "Entdecke Ark Chronika - das einzigartige LARP-Sammelkartenspiel, das deine Charaktere und epischen Momente verewigt! Tauche ein in eine Welt, in der deine liebsten LARP-Erinnerungen zu spielbaren Karten werden und erschaffe deine eigene Legende. Mit Regeln, die von beliebten Sammelkartenspielen inspiriert und speziell für LARPer angepasst wurden, bietet Ark Chronika ein authentisches und spannendes Spielerlebnis. Ob auf Veranstaltungen oder dazwischen, dieses von Aetherlab entwickelte Spiel bringt die LARP-Gemeinschaft auf eine ganz neue Art zusammen. Sammle, tausche und spiele mit Karten, die deine eigenen Abenteuer und die deiner Freunde widerspiegeln. Werde Teil dieser aufregenden Reise, bleibe über unseren Discord-Server auf dem Laufenden und gestalte mit uns die Zukunft!",
                "duelText": "Duelliert Euch!",
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
                "loadTemplate": preprocessor_1.Website.loadTemplate,
            });
            res.send(template);
        }));
    }
    Website.register = register;
})(Website || (exports.Website = Website = {}));
//# sourceMappingURL=page-home.js.map