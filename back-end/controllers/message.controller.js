import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {

    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let converstion = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!converstion) {
            converstion = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            converstion.messages.push(newMessage._id);
        }

        // SOCKET IO

        // await converstion.save();
        // await newMessage.save();

        await Promise.all([converstion.save(), newMessage.save()]);

        res.status(200).json(newMessage);
    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}

export const getMessages = async (req, res) => {

    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages")    

        if(!conversation)
        {
            return res.status(200).json([]);
        }
        
        const messages = conversation.messages;

        res.status(200).json(messages)

    } catch (error) {
        console.log("error in getMessage controller", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}