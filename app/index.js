import app from "./app";
import caseEntorno from "./config/index.js";

app.listen(app.get("PORT"), caseEntorno);