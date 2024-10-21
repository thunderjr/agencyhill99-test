const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const students = await getAllStudents();
  res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  const payload = req.body;
  const message = await addNewStudent(payload);
  res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  const { id: studentId } = req.params;
  const payload = req.body;
  const message = await updateStudent({ ...payload, studentId });
  res.json(message);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  const { id: studentId } = req.params;
  const student = await getStudentDetail(studentId);
  res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  const { id: studentId } = req.params;
  const payload = req.body;
  const message = await setStudentStatus({ ...payload, studentId });
  res.json(message);
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
