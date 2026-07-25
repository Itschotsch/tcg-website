import express from 'express';
import * as path from "path";
import * as process from "process";
import { Website as Preprocessor } from './preprocessor';
import { Website as PageHome } from './page-home';
import { Website as PageCardlist } from './page-cardlist';
import { Website as PageStarterDecks } from './page-starterdecks';
import { Website as PageShare } from './page-share';

Preprocessor.initialise();

const app = express();
const port = process.env.PORT || 3000;

app.use("/public", express.static(path.join(process.cwd(), `public`)));

PageHome.register(app);
PageCardlist.register(app);
PageStarterDecks.register(app);
PageShare.register(app);

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

export default app;