import User from "../models/User.js";

export const createUser = (req, res) => {
    new User(req.body)
        .save()
        .then((user) => res.status(201).json({ success: true, messgae: "User created successfully", user: user }))
        .catch((error) => res.status(400).json({ succes: false, message: error }));

};
export const getAllUsers = (req, res) => {
    User.find()
        .then((users) => res.status(200).json({ succes: true, users: users }))
        .catch((error) => res.status(400).json({ succes: false, message: error }));
};
export const getSingleUser = (req, res) => {
    const { id } = req.params;
    User.findById(id)
        .then((user) => res.status(200).json({ sucess: true, user: user }))
        .catch((error) => res.status(400).json({ succes: false, message: error }));
};
export const updateUser = (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    User.findByIdAndUpdate(id, {
        username: newData.username,
    }, { new: true })
        .then((updatedUser) => res.status(200).json({ message: true, message: `User updated successfully`, updatedUser: updatedUser }))
        .catch((error) => res.status(400).json({ succes: false, message: error }));
};
export const deleteUser = (req, res) => {
    const { id } = req.params;
    User.findByIdAndRemove(id)
        .then((deletedUser) => res.status(200).json({ message: true, message: `User with the id:${id} is deleted successfully`, deleteduser: deletedUser }))
        .catch((error) => res.status(400).json({ succes: false, message: error }));
};

