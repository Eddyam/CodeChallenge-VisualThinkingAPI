const Reader = require("../../lib/Reader");

describe("Pruebas de unidad para la clase Reader", () => {
    test("Verificar la lectura del archivo", () => {
        const students = Reader.readJsonFile("test/visualPartners.json");
        expect(explorers).toBeTruthy();
    });
});