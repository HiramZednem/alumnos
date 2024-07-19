"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const student_routes_1 = require("../../modules/student/infraestructure/routes/student.routes");
exports.routes = (0, express_1.Router)();
exports.routes.use('/student', student_routes_1.studentRoutes);
