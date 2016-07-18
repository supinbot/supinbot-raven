'use strict';

const raven = require('raven');

module.exports = function(SupinBot) {
	var config = SupinBot.config.loadConfig(require('./lib/config'));

	SupinBot.WebApp.use(raven.middleware.express.errorHandler(config.get('dsn')));

	var client = new raven.Client(config.get('dsn'));

	var _exitOnError;
	if (typeof SupinBot.log.exitOnError === 'function') {
		_exitOnError = SupinBot.log.exitOnError;
	}

	SupinBot.log.exitOnError = (err) => {
		if (_exitOnError) _exitOnError(err);
		client.captureException(err);
	};
};
