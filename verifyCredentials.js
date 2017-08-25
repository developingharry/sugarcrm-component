var sugarCRM = require('./lib/sugarcrm');

module.exports = verify;

async function verify(credentials) {
    try {
        const instance = new sugarCRM(credentials, this);
        const pingResponse = await instance.makeRequest('ping', 'GET');
        return pingResponse === 'pong';
    } catch (e) {
        // Workaround for https://github.com/elasticio/sailor-nodejs/issues/58
        console.log(`Exception: ${e.toString()} \n ${e.stack}`);
        return false;
    }
}

