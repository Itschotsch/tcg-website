"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const page_home_1 = require("./page-home");
const page_cardlist_1 = require("./page-cardlist");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use("/public", express_1.default.static(__dirname + '/../app/public'));
page_home_1.Website.register(app);
page_cardlist_1.Website.register(app);
// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map