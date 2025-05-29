const resolvers = {
    Query: {
        students: async() => {
           const studentList = await StudentModel.find({})
           
           console.log(studentList)
           return studentList
    }
    }
};

module.exports = resolvers