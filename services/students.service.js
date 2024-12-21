const DB = require("../db/connect");

const getAllStudents = async () => {
  try {
    const students = await DB.student.findMany();
    return { data: students, error: null };
  } catch (error) {
    return { data: null, error: error }
  }
};

const getStudentById = async (studentId) => {
  try {
    const student = await DB.student.findUnique({
      where: {
        id: studentId,
      },
    });
    if (!student) {
      return { data: null, error: "Student not found" };
    }
    return { data: student, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

const createStudent = async (studentData) => {
  try {
    const newStudent = await DB.student.create({
      data: {
        studentName: studentData.studentName,
        cohort: studentData.cohort,
        courses: studentData.courses,
        joinDate: studentData.joinDate,
        lastLogin: studentData.lastLogin,
        status: studentData.status ? true : false,
      },
    });
    return { data: newStudent, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

const updateStudent = async (studentId, studentData) => {
  try {
    const updatedStudent = await DB.student.update({
      where: {
        id: studentId,
      },
      data: {
        studentName: studentData.studentName,
        cohort: studentData.cohort,
        courses: studentData.courses,
        joinDate: studentData.joinDate,
        lastLogin: studentData.lastLogin,
        status: studentData.status,
      },
    });
    return { data: updatedStudent, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await DB.student.delete({
      where: {
        id: studentId,
      },
    });
    return { data: deletedStudent, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
};

const StudentServices = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};

module.exports = StudentServices
