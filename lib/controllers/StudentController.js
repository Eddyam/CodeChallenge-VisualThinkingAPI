const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

class StudentController {
    static getStudents() {
        const students = Reader.readJsonFile("visualPartnersDB.json");
        return StudentService.getStudents(students);
    }

    static getStudentsWithCertification() {
        const students = Reader.readJsonFile("visualPartnersDB.json");
        return StudentService.getStudentsWithCertification(students);
    }

    static getStudentsCreditsValidation() {
        const students = Reader.readJsonFile("visualPartnersDB.json");
        return StudentService.getStudentsCreditsValidation(students);
    }
}

module.exports = StudentController;