const demo = require('../app/modules/demo');
const User = require('../app/modules/user');
const Message = require('../app/modules/message');

module.exports = (app) => {
    app.get('/', demo.getUserDetails);
    app.post('/add-user', User.addUser);
    app.post('/get-users', User.getUsers);
    app.post('/add-message', Message.addMessages);
    app.post('/get-messages', Message.getMessages);
}

