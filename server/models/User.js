const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const checkPassword = function(input) {
    const passw = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (input.match(passw)) {
      return true;
    }
    return false;
}

const userSchema = new Schema ({
    username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50,
        unique: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate:{
            validator: validateEmail,
            message: 'this is not a valid email format'
        }
    },
    password:{
        type: String,
        required: true,
        validate: {
            validator: checkPassword,
            message: 'choose a more secure password (must be at least 8 characters long, contain at least one lower-case letter, one upper-case letter, and one number or one special character)'
        }
    },

})