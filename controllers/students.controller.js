const StudentServices = require('../services/students.service');

const getStudents = async (req, res) => {
  try {
    const { data, error } = await StudentServices.getAllStudents();
    if (error) throw error;
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

module.exports = { getStudents };
