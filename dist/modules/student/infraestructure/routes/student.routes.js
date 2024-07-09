"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = require("express");
const dependencies_1 = require("../dependencies");
exports.studentRoutes = (0, express_1.Router)();
/* El método bind se utiliza para asegurarse de que el valor de this utilizado dentro del método de la instancia sea siempre la instancia de la clase.
Sin bind el valor de this dentro del metodo podria ser cualquier objeto.
En este caso, aseguramos que el this dentro del metodo será siempre el objeto 'studentController' */
exports.studentRoutes.get("/", dependencies_1.studentController.getHelloWorld.bind(dependencies_1.studentController));
