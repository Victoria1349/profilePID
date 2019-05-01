var cookieParser = require('cookie-parser');
var session = require('express-session');

// connect to DB
var mongooseStore = require('connect-mongodb')(session);
var mongoose = require('mongodb');

module.exports = {
    createStore: function() {
        var config = {
            user: 'test',
            password: '1234',
            server: 'localhost',
            database: 'testDB',
            port: 3001,
            pool: {
                max: 10,
                min: 0,
                idleTimeoutMillis: 30000
            }
        }
        return new mongooseStore(config);
    }
}
