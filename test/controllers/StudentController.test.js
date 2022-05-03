const StudentController = require("../../lib/controllers/StudentController");

describe("Pruebas de unidad para la clase StudentController", () => {
    test("Prueba para consultar todos los estudiantes", () => {
        const result = StudentController.getStudents();
        expect(result.length).toBe(5);
    });

    test("Prueba para consultar los emails de todos los estudiantes que tengan certificacion.", () => {
        const result = StudentController.getStudentsWithCertification();
        expect(result.length).toBe(4)
    });

    test("Prueba para consultar todos los estudiantes que tengan credits mayor a 500", () => {
        const result = StudentController.getStudentsCreditsValidation();
        expect(result.length).toBe(3);
    });
});