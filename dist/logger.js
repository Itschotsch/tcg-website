"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Website = void 0;
var Website;
(function (Website) {
    function log(message) {
        console.log(message);
    }
    Website.log = log;
    function err(message, error = undefined) {
        if (error) {
            console.error(error.stack);
        }
        console.error(message);
    }
    Website.err = err;
})(Website || (exports.Website = Website = {}));
//# sourceMappingURL=logger.js.map