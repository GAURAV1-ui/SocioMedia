import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        email: {
            type: password,
            required: true,
            min: 5,
        },
        picture: {
            type: String,
            default: "",
        },
        friends: {
            type: Array,
            default: String,
        },
        location: String,
        occupation: String,
        viewedProfile: Number,
        impressions: Number,
    },
    {timestamps: true}
);

const User = mongoose.model("User", UserSchema);
export default User;