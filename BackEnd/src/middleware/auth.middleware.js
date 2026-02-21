import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (token == null) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded == false) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Token is invalid" });
    }

    const user = User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    req.user = user;
  } catch (error) {
    console.log("Error in Protected Route Middleware: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
