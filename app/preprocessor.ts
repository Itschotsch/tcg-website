import * as fs from "fs";
import { Website as Logger } from "./logger";

export namespace Website {

    export const Options = {
        maximumPreprocessingIterations: 100
    };
    
    export function loadTemplate(name: string): string {
        return fs.readFileSync(`${__dirname}/private/${name}.html`, "utf-8");
    }

    export function preprocessTemplate(template: string, env: { [key: string]: any }): string {
        let preprocessingIterations: number = 0;
        while (true) {
            try {
                if (preprocessingIterations > Options.maximumPreprocessingIterations) {
                    Logger.err(`Preprocessing took too long: ${preprocessingIterations} iterations.`);
                    break;
                }

                const indices: PreprocessScriptIndices | null = findPreprocessScriptIndices(template);
                if (!indices) {
                    break;
                }
                const script = template.substring(indices.scriptStartIndex, indices.scriptEndIndex);
                let evaluated: any;
                try {
                    evaluated = eval(script);
                } catch (error: any) {
                    Logger.err(`An error occurred during preprocessing: ${script}`, error);
                    evaluated = "";
                }
                template = template.substring(0, indices.tagStartIndex) + evaluated + template.substring(indices.tagEndIndex);
            } catch (error) {
                Logger.err("An error occurred during preprocessing.", error);
                break;
            }
            preprocessingIterations++;
        }
    
        return template;
    }

    type PreprocessScriptIndices = { tagStartIndex: number, tagEndIndex: number, scriptStartIndex: number, scriptEndIndex: number };
    function findPreprocessScriptIndices(str: string): PreprocessScriptIndices | null {
        const startDelimiter: string = "{{";
        const endDelimiter: string = "}}";
    
        // Find the first opening tag:
        const startIndex: number = str.indexOf(startDelimiter);
        if (startIndex === -1) {
            return null;
        }
    
        // Find the first closing tag on the same level:
        let level: number = 1;
        let currentIndex: number = startIndex + startDelimiter.length;
        while (level > 0) {
            const nextStartIndex: number = str.indexOf(startDelimiter, currentIndex);
            const nextEndIndex: number = str.indexOf(endDelimiter, currentIndex);
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


}