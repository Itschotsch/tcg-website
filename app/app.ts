import express from 'express';
import { Website as PageHome } from './page-home';
import { Website as PageCardlist } from './page-cardlist';

const app = express();
const port = process.env.PORT || 3000;

app.use("/public", express.static(__dirname + '/../app/public'));

PageHome.register(app);
PageCardlist.register(app);

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

export default app;