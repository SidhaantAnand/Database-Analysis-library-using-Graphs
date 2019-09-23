/*
index.js 
	-> connect(credentials) function
		Rest all functions will require connect_db.js and check if it is not {}
	-> graphify_table(tablename)
	-> graphify_db(dbname)
		Rest all functions will check if Nodemap is not empty, else nothing has been graphified
	-> relationship_exists(label1,label2) --> will check in all nodemap keys for any relationship
	-> get_relationships(type,label1) --> will check in all nodemap.maps.type and return a json
	-> combine(tablename) --> creates one table with all the consolidated data (every key in maps will be a seperate column)
		Rest all 
	-> add_relationship(label1,label2)

*/

const connectDb = require('./connectDb.js')
const graphifyTable = require('./graphifyTable.js')
const graphifyDatabase = require('./graphifyDatabase.js')
const relationshipExists = require('./relationshipExists.js')
const getRelationships = require('./getRelationships.js')
const addRelationships = require('./addRelationships.js')

module.exports = {
	connect : connectDb.connect,
	graphify_table : graphifyTable.grapify_table,
	graphify_database: graphifyDatabase.graphify_database,
	relationship_exists : relationshipExists.relationship_exists,
	get_relationships : getRelationships.get_relationships,
	add_relationships : addRelationships.add_relationships
}