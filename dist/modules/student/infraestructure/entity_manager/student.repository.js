"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const db_1 = require("../../../../config/database/db");
class StudentRepository {
    constructor() {
        this.connection = new db_1.Connection();
    }
    ;
    getStudentById(id_student) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve, reject) => {
                const query = "SELECT * FROM student WHERE id_student = ?";
                this.connection.pool.query(query, [id_student], (error, result, fields) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        if (result.length > 0) {
                            const student = {
                                name: result[0].name,
                                lastname: result[0].lastname,
                                email: result[0].email,
                                phone: result[0].phone,
                                address: result[0].address
                            };
                            resolve(student);
                        }
                        else {
                            resolve(null);
                        }
                    }
                });
            });
        });
    }
    ;
}
exports.StudentRepository = StudentRepository;
