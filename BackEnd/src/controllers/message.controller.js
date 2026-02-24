import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json({ filteredUsers });
  } catch (error) {
    console.log("Error in getUserForSidebar Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: UserToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        {
          senderId: myId,
          receiverId: UserToChatId,
        },
        {
          senderId: UserToChatId,
          receiverId: myId,
        },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages Controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
