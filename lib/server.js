const StudentController = require("./controllers/StudentController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000; 

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Courses API"});
});

app.get("/v1/students", (request, response) => {
    const students = StudentController.getStudents();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const emailList = StudentController.getStudentsWithCertification();
    response.json(emailList);
});

app.get("/v1/students/credits", (request, response) => {
    const studentsCreditsList = StudentController.getStudentsCreditsValidation();
    response.json(studentsCreditsList);
})

app.listen(port, () => {
    console.log({message: `Visual Thinking Courses API in localhost ${port}`});
});