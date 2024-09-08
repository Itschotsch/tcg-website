"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Website = void 0;
const express_1 = __importDefault(require("express"));
const page_home_1 = require("./page-home");
const page_cardlist_1 = require("./page-cardlist");
var Website;
(function (Website) {
    const app = (0, express_1.default)();
    const port = 3000;
    const ip = "0.0.0.0";
    app.use("/public", express_1.default.static(__dirname + '/public'));
    page_home_1.Website.register(app);
    page_cardlist_1.Website.register(app);
    app.listen(port, ip, () => {
        return console.log(`Listening at http://localhost:${port}`);
    });
})(Website || (exports.Website = Website = {}));
//# sourceMappingURL=app.js.map