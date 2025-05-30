const {MemberModel, adminModel} = require('../mongoDb/schema')
const bcrypt = require('bcrypt');


const resolvers = {
    Query: {
        members: async() => {
           const memberList = await MemberModel.find({})
           return memberList
    },
    admin: async (_, { uname, password }) => {
        const admin = await adminModel.findOne({ uname });
        if (!admin) return null;

        // const isValid = await bcrypt.compare(password, admin.password);
        // if (!isValid) return null;

        return admin;
    }
    },
    Mutation: {
        addMember: async (_, { input }) => {
            const newMember = new MemberModel(input);
            await newMember.save();
            return newMember;
        },
        createAdmin: async (_, { input }) => {
            const { uname, password } = input;
             // Check if username already exists
                const existing = await adminModel.findOne({ uname });
                if (existing) {
                    throw new Error('Username already exists');
                }
            // Create and save admin (password is hashed automatically by pre-save)
            const admin = new adminModel({ uname, password });
            await admin.save();

            return {
                id: admin._id,
                uname: admin.uname
                // Do NOT return the password
            };
          },
    }
};

module.exports = resolvers