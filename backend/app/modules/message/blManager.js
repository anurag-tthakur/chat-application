import MessageModel from "../../models/message";

class BLManager {
    async addMessages(requestBody) {
        if (!requestBody)
            throw "invalid request";
        const message = new MessageModel(requestBody);
        const addMessageRes = await message.save();
        return addMessageRes;
    }

    async getMessages(requestBody) {
        if (!requestBody)
            throw "invalid request";
        return MessageModel.getDocuments(requestBody);
    }
}

export default BLManager;