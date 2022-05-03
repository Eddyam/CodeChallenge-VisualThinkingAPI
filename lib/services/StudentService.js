class StudentService {

    static getStudents(students){
        return students;
    }

    static getStudentsWithCertification(students) {
        const studentsWithCertification = students.filter((student) => student.haveCertification == true);
        const emailsList = studentsWithCertification.map((student) => [student.name, student.email]);
        return emailsList;
    }

    static getStudentsCreditsValidation(students) {
        const studentsApproved = students.filter((student) => student.credits > 500);
        return studentsApproved;
    }
}

module.exports = StudentService;