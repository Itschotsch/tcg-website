"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
const csv = __importStar(require("csv"));
const logger_1 = require("./logger");
var Website;
(function (Website) {
    Website.Options = {
        maximumPreprocessingIterations: 100
    };
    function loadTemplate(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return fs.readFileSync(`${__dirname}/../app/private/${name}.html`, "utf-8");
        });
    }
    Website.loadTemplate = loadTemplate;
    function preprocessTemplate(template, env) {
        return __awaiter(this, void 0, void 0, function* () {
            let preprocessingIterations = 0;
            while (true) {
                try {
                    if (preprocessingIterations > Website.Options.maximumPreprocessingIterations) {
                        logger_1.Website.err(`Preprocessing took too long: ${preprocessingIterations} iterations.`);
                        break;
                    }
                    const indices = findPreprocessScriptIndices(template);
                    if (!indices) {
                        break;
                    }
                    const script = template.substring(indices.scriptStartIndex, indices.scriptEndIndex).trim();
                    let evaluated;
                    try {
                        // evaluated = eval(script);
                        // evaluated = eval(`(async () => {${script}})()`);
                        // evaluated = await Object.getPrototypeOf(async function() {}).constructor(`return (async function(env) { return ${script}; })(env);`)(env);
                        evaluated = yield (new Function("env", `return (async function(env) { return ${script}; })(env);`))(env);
                    }
                    catch (error) {
                        logger_1.Website.err(`An error occurred during preprocessing: ${script}`, error);
                        evaluated = "";
                    }
                    template = template.substring(0, indices.tagStartIndex) + evaluated + template.substring(indices.tagEndIndex);
                }
                catch (error) {
                    logger_1.Website.err("An error occurred during preprocessing.", error);
                    break;
                }
                preprocessingIterations++;
            }
            return template;
        });
    }
    Website.preprocessTemplate = preprocessTemplate;
    function findPreprocessScriptIndices(str) {
        const startDelimiter = "{{";
        const endDelimiter = "}}";
        // Find the first opening tag:
        const startIndex = str.indexOf(startDelimiter);
        if (startIndex === -1) {
            return null;
        }
        // Find the first closing tag on the same level:
        let level = 1;
        let currentIndex = startIndex + startDelimiter.length;
        while (level > 0) {
            const nextStartIndex = str.indexOf(startDelimiter, currentIndex);
            const nextEndIndex = str.indexOf(endDelimiter, currentIndex);
            // If we find an opening tag first, increment the level:
            if (nextStartIndex !== -1 && (nextStartIndex < nextEndIndex || nextEndIndex === -1)) {
                level++;
                currentIndex = nextStartIndex + startDelimiter.length;
            }
            // If we find a closing tag first, decrement the level:
            else if (nextEndIndex !== -1 && (nextEndIndex < nextStartIndex || nextStartIndex === -1)) {
                level--;
                currentIndex = nextEndIndex + endDelimiter.length;
            }
            // If we reach the end of the string, return null:
            else {
                return null;
            }
        }
        return {
            tagStartIndex: startIndex,
            tagEndIndex: currentIndex,
            scriptStartIndex: startIndex + startDelimiter.length,
            scriptEndIndex: currentIndex - endDelimiter.length
        };
    }
    // Aetherlab-specific
    function loadCSV(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // https://csv.js.org/parse/
            let fileName = `${__dirname}/../app/private/${name}.csv`;
            return new Promise((resolve, reject) => {
                fs.createReadStream(fileName)
                    .pipe(csv.parse({
                    columns: true,
                    bom: true,
                    // Aetherlab specific columns from Notion:
                    // ID,Name,Kartenart,Kartentext,Element,Kosten,⚔️,🛡️,⭕️,Kartentyp,Status,Created by,Kosten Terra,Kosten Aqua,Kosten Aeris,Kosten Ignis,Kosten Magica,Kosten Ungeprägt,Flavourtext,Artwork,Art Production,Glossar,Decklist
                    // columns: [
                    //     "ID",
                    //     "Layout",
                    //     "Title",
                    //     "Subtitle",
                    //     "Description",
                    //     "Artwork",
                    //     "EntityKind",
                    //     "EntityType",
                    //     "OffensiveStat",
                    //     "DefensiveStat",
                    //     "ShieldspellStat",
                    //     "FlavourText",
                    //     // "CostElement",
                    //     // "CostAmount",
                    //     "CostTerra",
                    //     "CostAqua",
                    //     "CostAeris",
                    //     "CostIgnis",
                    //     "CostMagica",
                    //     "CostUnshaped",
                    //     "ElementalAmount"
                    // ],
                }, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                }));
            });
        });
    }
    Website.loadCSV = loadCSV;
    function loadCommasSeparatedList(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let fileName = `${__dirname}/../app/private/${name}.txt`;
            return new Promise((resolve, reject) => {
                fs.readFile(fileName, "utf-8", (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data.split(",").map(x => x.trim()).filter(x => x.length > 0));
                    }
                });
            });
        });
    }
    Website.loadCommasSeparatedList = loadCommasSeparatedList;
    // export function preprocessNotionCardsCSV(cardData: { [key: string]: string }): { [key: string]: string } {
    //     let newCardData = {};
    //     Object.assign(newCardData, cardData);
    //     return newCardData;
    // }
})(Website || (exports.Website = Website = {}));
//# sourceMappingURL=preprocessor.js.map