import app from  "../app.js";
import message from "./messages.js";

//Solo mensajes donde se muestra el puerto segun el enviroment usado
const caseEntorno = () => {
    switch (process.env.NODE_ENV){
        case "production":
            message(`Mostrando api ${app.get("PORT")}`, "danger")
            break;

        case "develop":
            message(`Mostrando api ${app.get("PORT")}`, "success")
            break;

        case "qa":
            message(`Mostrando api ${app.get("PORT")}`, "warning")
            break;

        default:
            message(`Mostrando api ${app.get("PORT")}`, "success")
            break;
    
    }
};

export default caseEntorno; 