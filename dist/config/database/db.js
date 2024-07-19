"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mysql2_1 = require("mysql2");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
class Connection {
    constructor() {
        this.config = {
            host: process.env.DB_HOST,
            user: String(process.env.DB_USER),
            password: String(process.env.DB_PASS),
            port: Number(process.env.DB_PORT),
            database: String(process.env.DB_NAME),
        };
        this.pool = (0, mysql2_1.createPool)(this.config);
    }
}
exports.Connection = Connection;
;
