const StudentModel = require('../mongoDb/schema')

const resolvers = {
    Query: {
        students: async() => {
           const studentList = await StudentModel.find({})
           return studentList
    }
    }
};

module.exports = resolvers