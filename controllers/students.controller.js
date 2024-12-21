const StudentServices = require('../services/students.service');

const getStudents = async (req, res) => {
  try {
    const { data, error } = await StudentServices.getAllStudents();
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch students' });
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching students' });
  }
};

const getStudentById = async (req, res) => {
  const { studentId } = req.params;
  try {
    const { data, error } = await StudentServices.getStudentById(Number(studentId)); // Parse ID to number
    if (error) {
      return res.status(404).json({ error: error }); // If student not found
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching student' });
  }
};

const createStudent = async (req, res) => {
  const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;
  try {
    if (!studentName || !cohort || !courses || !joinDate || !lastLogin || status === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const { data, error } = await StudentServices.createStudent({
      studentName,
      cohort,
      courses,
      joinDate: new Date(joinDate),
      lastLogin: new Date(lastLogin),
      status,
    });

    if (error) {
      return res.status(500).json({ error: 'Failed to create student' });
    }
    
    return res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while creating student' });
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;

  try {
    if (!studentName || !cohort || !courses || !joinDate || !lastLogin || status === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { data, error } = await StudentServices.updateStudent(Number(id), {
      studentName,
      cohort,
      courses,
      joinDate: new Date(joinDate),
      lastLogin: new Date(lastLogin),
      status,
    });

    if (error) {
      return res.status(500).json({ error: 'Failed to update student' });
    }

    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating student' });
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await StudentServices.deleteStudent(Number(id));

    if (error) {
      return res.status(500).json({ error: 'Failed to delete student' });
    }

    return res.status(200).json({ message: 'Student deleted successfully', data });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting student' });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
