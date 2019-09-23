var NodeMap = require('./NodeMap.js')
const connection = require('./connect_db.js')

var maps = NodeMap.get()

// This will combine all the tables to return an array of jsons where each json represents a row 
module.exports = function() {
	column_names = Object.keys(maps)
	var all_rows = []

	// We can get the first key and of the maps and make the row which should fill all the column name

}