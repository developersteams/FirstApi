const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    address:{
        type:String,
        required:true,
    }
});

UserSchema.pre('save', async function (next) {
    
    if(!this.userId) {
        const lastUser = await User.findOne().sort({userId:-1});
        this.userId = lastUser ? lastUser.userId + 1 : 101;
    }

    next();
})


module.exports = mongoose.model('Users', UserSchema);