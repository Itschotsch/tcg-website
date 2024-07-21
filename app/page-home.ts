import express from 'express';
import {Website as Preprocessor} from './preprocessor';

export namespace Website {

    export function register(app: express.Express) {
        app.get('/', (req, res) => {
            let template: string = Preprocessor.loadTemplate("page-home");
            template = Preprocessor.preprocessTemplate(template, {
                "websiteName": "LARP TCG",
            });
            res.send(template);
        });
    }

}