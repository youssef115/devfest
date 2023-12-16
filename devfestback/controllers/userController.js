import User from "./models/User.js"
import bcrypt from "bcryptjs"



//getSingle User
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
  
    try {
      const user = await User.findById(id);
  
      res.status(200).json({
        success: true,
        message: "Successful",
        data: user,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
  };


//getAll User
export const getAllUser = async (req, res) => {
    try {
      const users = await User.find({});
  
      res.status(200).json({
        success: true,
        message: "Successful",
        data: users,
      });
    } catch (err) {
      res.status(404).json({
        success: false,
        message: "not found",
      });
    }
  };