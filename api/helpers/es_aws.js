var Elasticsearch = require('aws-es');

// Using AWS elastic search 
elasticsearch = new Elasticsearch({
		accessKeyId: 'changeme',
		secretAccessKey: 'changeme',
		service: 'es',
		region: 'us-west-1',
		host: 'changeMe'
	});