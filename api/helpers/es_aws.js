var Elasticsearch = require('elasticsearch');

// Using AWS elastic search 
var client = new Elasticsearch.Client({
		host: 'localhost:32771',
		log: 'error'
	});