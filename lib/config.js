'use strict';

module.exports = {
	dsn: {
		doc: 'The Sentry DSN Key to use with raven',
		format: String,
		default: null,
		env: 'SUPINBOT_RAVEN_DSN'
	}
};
