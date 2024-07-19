"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const student_repository_1 = require("./entity_manager/student.repository");
const student_controller_1 = require("./controllers/student.controller");
const GetById_1 = require("../application/use_cases/GetById");
const studentRepository = new student_repository_1.StudentRepository();
const getStudentById = new GetById_1.GetByIdUseCase(studentRepository);
exports.studentController = new student_controller_1.StudentController(getStudentById);
