const connection = require('./connect_db.js')
const Node = require('./Node.js')
const graphify_table = require('./graphifyTable')

module.exports.graphify_database = function (credentials,dbname) {
  
  connection.query(' USE ' + dbname, function (error, results, fields) {
    if(error) {
    console.log(error)
    throw error
	}
	connection.query('SHOW TABLES ' , function (error, results, fields) {
	    if(error) {
	    console.log(error)
	    throw error
		}

		for(index in results) {
			graphify_table(results[index]['Tables_in_'+dbname])
		}
	}) 
})