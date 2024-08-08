import express from 'express';
import {Website as PageHome} from './page-home';
import {Website as PageCardlist} from './page-cardlist';

export namespace Website {

    const app = express();
    const port = 3000;

    app.use("/public", express.static(__dirname + '/public'));

    PageHome.register(app);

    PageCardlist.register(app);

    app.listen(port, () => {
        return console.log(`Listening at http://localhost:${port}`);
    });

}