"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
const general_routes_1 = require("./infraestructure/routes/general.routes");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = Number(process.env.API_PORT);
app.use(body_parser_1.default.json());
app.use("/module", general_routes_1.routes);
app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`);
});
