module.exports = {
    DB: process.env.DB || 'mongodb://anurag:anurag321@ds053688.mlab.com:53688/chat-webapp',
    IS_CONSOLE_LOG: "true",
    AMQP_HOST_URL: process.env.AMQP_HOST_URL || ''
};
