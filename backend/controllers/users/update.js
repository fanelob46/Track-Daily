import asyncHandler from "express-async-handler";
import User from "../../models/userModel.js";
import router from "../../routes/userRoutes.js";

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        if (req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id, 
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastNamestName,
            email: updatedUser.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found')
    }
});


export { updateUserProfile };