const Reader = require("../../lib/utils/Reader");

describe("Pruebas de unidad para la clase Reader", () => {
    test("Verificar la lectura del archivo", () => {
        const students = Reader.readJsonFile("test/visualPartnersDB_test.json");       
        expect(students).toBeTruthy();
        expect(students.length).toBe(5);
    });
});