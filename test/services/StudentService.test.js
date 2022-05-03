const Reader = require("../../lib/utils/Reader");
const StudentService = require("../../lib/services/StudentService");

describe("Pruebas de unidad para la clase StudentService", () => {   
    const students = Reader.readJsonFile("test/visualPartnersDB_test.json");    
    test("Prueba para consultar los emails de todos los estudiantes que tengan certificacion.", () => {
        const result = StudentService.getStudentsWithCertification(students);
        expect(result).toBe(2); 
    });
    test("Prueba para consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const result = StudentService.getStudentsApproved(students);
        expect(result).toBe(3);
    });
});