import { Express, Request, Response } from 'express';


export namespace Website {

    export function register(app: Express) {
        // Redirects
        app.get('/l/rules', (req: Request, res: Response) => {
            res.redirect(302, 'https://w1a.notion.site/tcg-spielregeln');
        });

        app.get('/l/submission', (req: Request, res: Response) => {
            res.redirect(302, 'https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105');
        });


        // TCG Arena
        app.get('/tcg-arena', (req: Request, res: Response) => {
            res.redirect(302, 'https://tcg-arena.fr/load/YW5vci5jYXJkcyUyRnRjZy1hcmVuYSUyRm1haW4uanNvbg==');
        });

        app.get('/tcg-arena/main.json', (req: Request, res: Response) => {
            res.redirect(302, 'https://itschotsch.github.io/anor/tcg-arena/main.json');
        });

        // /tcg-arena/* -> https://itschotsch.github.io/anor/tcg-arena/*
        app.get('/tcg-arena/*', (req: Request, res: Response) => {
            const rest = req.params[0];
            res.redirect(302, 'https://itschotsch.github.io/anor/tcg-arena/' + rest);
        });
    }

}
