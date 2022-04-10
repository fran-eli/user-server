import express from "express";
import config from "./modules/config";

const app = express();

import routes from "./routes/routes";
import middleware from "./middleware/middleware";

routes(app);
middleware(app);

app.get("*", (req, res) => {
    res.send({ status: 404, message: "Not Found" });
});

app.listen(config.port, () =>
    console.log(`\nListening at port ${config.port}!\n`)
);
