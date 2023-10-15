const mongoose = require("mongoose");

//in the field, use firstname, surname, profession, email
// Go to controllers and do the same
// got to routes and do the same

const UserSchema = new mongoose.Schema({
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;