const db = require('../../data/config')

const find = async () => {
  const students = await db('students')
  return students
}

const findById = async id => {
  const [student] = await db('students').where({ id })
  return student
}

function add(student) {
  return db("students")
    .insert(student, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

const remove = async id => {
  await db('students').where({ id }).del()
}

module.exports = {
  find,
  findById,
  remove,
  add
}
