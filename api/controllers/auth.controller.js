import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async(req, res,next) => {
    const { firstName,lastName,email, password, phoneNumber } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ firstName, lastName, email, password:hashedPassword, phoneNumber });
    try {
        await newUser.save();
        res.status(201).json('User created successfully!');
        console.log(newUser);

    } catch (error) {
       next(error)
    }

};
