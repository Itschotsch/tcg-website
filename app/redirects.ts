import express from 'express';

export namespace Website {

    export function register(app: express.Express) {
        // Redirects
        app.get('/l/rules', (req, res) => {
            res.redirect(302, 'https://w1a.notion.site/tcg-spielregeln');
        });

        app.get('/l/submission', (req, res) => {
            res.redirect(302, 'https://w1a.notion.site/1f895bba56ba8019991ec719a66e5b53?pvs=105');
        });
    }

}
