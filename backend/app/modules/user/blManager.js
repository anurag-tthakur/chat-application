import UserModel from "../../models/users";

class BLManager {
    async addUser(requestBody) {
        const findObj = {username: requestBody.username, isDeleted: false};
        const usersRes = await UserModel.getDocuments(findObj)
        if (!usersRes || !usersRes.length) {
            const user = new UserModel(requestBody);
            return user.save();
        }
        return usersRes[0];
    }

    async getUsers(requestBody) {
        const findObj = {...requestBody, isDeleted: 0};
        return UserModel.getDocuments(findObj);
    }
}

export default BLManager;