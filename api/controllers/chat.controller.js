import Chat from '../models/chat.model.js';

export const getChats = async (req, res) => {
    const tokenUserId = req.userId;

    try {
        const chats = await Chat.find({
            userIDs: { $in: [tokenUserId] }
        }).populate('users', 'id username avatar'); // Populating user data

        for (const chat of chats) {
            const receiverId = chat.userIDs.find((id) => id.toString() !== tokenUserId);
            const receiver = await User.findById(receiverId).select('id username avatar');
            chat.receiver = receiver;
        }

        res.status(200).json(chats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to get chats!" });
    }
};
