const DB = require("../db/connect");

const getAllStudents = async () => {
  try {
    const students = await DB.student.findMany();
    return { data: students, error: null };
  } catch (error) {
    return { data: null, error: error }
  }
}

const StudentServices = {
  getAllStudents
}

module.exports = StudentServices
