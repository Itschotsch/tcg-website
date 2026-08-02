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


        // TCG Arena CORS Middleware
        const handleTCGArenaCORS = (req: Request, res: Response, next: () => void) => {
            const origin = req.headers.origin;
            if (typeof origin === 'string') {
                try {
                    const parsedOrigin = new URL(origin);
                    if (parsedOrigin.hostname === 'tcg-arena.fr' || parsedOrigin.hostname.endsWith('.tcg-arena.fr')) {
                        res.setHeader('Access-Control-Allow-Origin', origin);
                        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
                        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
                        res.setHeader('Access-Control-Allow-Credentials', 'true');
                    }
                } catch (e) {
                    // Ignore invalid URL
                }
            }
            res.setHeader('Vary', 'Origin');

            if (req.method === 'OPTIONS') {
                res.sendStatus(204);
                return;
            }

            next();
        };

        app.options('/tcg-arena', handleTCGArenaCORS);
        app.get('/tcg-arena', handleTCGArenaCORS, (req: Request, res: Response) => {
            res.redirect(302, 'https://tcg-arena.fr/load/YW5vci5jYXJkcyUyRnRjZy1hcmVuYSUyRm1haW4uanNvbg==');
        });

        app.options('/tcg-arena/main.json', handleTCGArenaCORS);
        app.get('/tcg-arena/main.json', handleTCGArenaCORS, (req: Request, res: Response) => {
            res.redirect(302, 'https://itschotsch.github.io/anor/tcg-arena/main.json');
        });

        // /tcg-arena/* -> https://itschotsch.github.io/anor/tcg-arena/*
        app.options('/tcg-arena/*', handleTCGArenaCORS);
        app.get('/tcg-arena/*', handleTCGArenaCORS, (req: Request, res: Response) => {
            const rest = req.params[0];
            res.redirect(302, 'https://itschotsch.github.io/anor/tcg-arena/' + rest);
        });
    }

}
