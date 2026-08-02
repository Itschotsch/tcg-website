import { Express, Request, Response } from 'express';
import * as https from 'https';


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
                    const hostname = parsedOrigin.hostname;

                    // Allow production, local, and preview domains
                    const isProduction = hostname === 'tcg-arena.fr' ||
                        hostname.endsWith('.tcg-arena.fr') ||
                        hostname === 'anor.cards' ||
                        hostname.endsWith('.anor.cards');

                    const isDevelopment = hostname === 'localhost' ||
                        hostname === '127.0.0.1' ||
                        hostname === 'tcg-website.vercel.app' ||
                        hostname.endsWith('tcg-website.vercel.app');

                    if (isProduction || isDevelopment) {
                        res.setHeader('Access-Control-Allow-Origin', origin);
                        res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
                        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
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
            res.redirect(302, 'https://tcg-arena.fr/load/aHR0cHMlM0ElMkYlMkZhbm9yLmNhcmRzJTJGdGNnLWFyZW5hJTJGbWFpbi5qc29u');
        });

        app.options('/tcg-arena/main.json', handleTCGArenaCORS);
        app.get('/tcg-arena/main.json', handleTCGArenaCORS, (req: Request, res: Response) => {
            // It's stupid but simply redirecting does not work due to CORS. So we have to proxy the request.
            const targetUrl = 'https://itschotsch.github.io/anor/tcg-arena/main.json';
            https.get(targetUrl, (proxyRes) => {
                if (proxyRes.headers['content-type']) {
                    res.setHeader('Content-Type', proxyRes.headers['content-type']);
                }
                res.status(proxyRes.statusCode || 200);
                proxyRes.pipe(res);
            }).on('error', (err) => {
                console.error("Error proxying main.json:", err);
                res.redirect(302, targetUrl); // Fallback to redirect on error
            });
        });

        // /tcg-arena/* -> https://itschotsch.github.io/anor/tcg-arena/*
        app.options('/tcg-arena/*', handleTCGArenaCORS);
        app.get('/tcg-arena/*', handleTCGArenaCORS, (req: Request, res: Response) => {
            // It's stupid but simply redirecting does not work due to CORS. So we have to proxy the request.
            const rest = req.params[0];
            const targetUrl = 'https://itschotsch.github.io/anor/tcg-arena/' + rest;

            https.get(targetUrl, (proxyRes) => {
                if (proxyRes.headers['content-type']) {
                    res.setHeader('Content-Type', proxyRes.headers['content-type']);
                }
                res.status(proxyRes.statusCode || 200);
                proxyRes.pipe(res);
            }).on('error', (err) => {
                console.error(`Error proxying ${rest}:`, err);
                res.redirect(302, targetUrl); // Fallback to redirect on error
            });
        });
    }

}
