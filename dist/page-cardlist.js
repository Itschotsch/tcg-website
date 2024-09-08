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
        app.get('/cards', (req, res) => __awaiter(this, void 0, void 0, function* () {
            let template = yield preprocessor_1.Website.loadTemplate("page-scaffold");
            let cardlistName = (req.query.cardlist || "playtest").toString();
            let cardlistFile = "cardlist-" + cardlistName;
            // Check whether cardlist actually exists
            if (!(yield preprocessor_1.Website.commasSeparatedListExists(cardlistFile))) {
                res.status(404).send("Cardlist not found.");
                return;
            }
            template = yield preprocessor_1.Website.preprocessTemplate(template, {
                "websiteName": "Ark Chronika",
                "pageBody": yield preprocessor_1.Website.loadTemplate("page-cardlist"),
                "catchphrase": "Durchstöbere die Karten",
                "cardlistName": cardlistName.charAt(0).toUpperCase() + cardlistName.slice(1),
                "cardData": maskCardData(yield preprocessor_1.Website.loadCSV("Alle Karten 70ddd0aaafb74f56b205e643b0901290_all"), (yield preprocessor_1.Website.loadCommasSeparatedList(cardlistFile)).sort()),
                "footerText": `© ${new Date().getFullYear()} Aetherlab`,
                "loadTemplate": preprocessor_1.Website.loadTemplate,
            });
            res.send(template);
        }));
    }
    Website.register = register;
    function maskCardData(cardData, cardIDs) {
        let newCardData = [];
        for (let card of cardData) {
            if (cardIDs.includes(card.ID)) {
                newCardData.push(card);
            }
        }
        return newCardData;
    }
})(Website || (exports.Website = Website = {}));
//# sourceMappingURL=page-cardlist.js.map