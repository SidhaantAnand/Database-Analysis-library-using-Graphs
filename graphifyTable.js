const connection = require('./connect_db.js')
const Node = require('./Node.js')
module.exports.grapify_table = function (table_name) {
  // A file to define query parameters
  connection.query('SELECT * FROM ' + table_name, function (error, results, fields) {
    if(error) {
    console.log(error)
    throw error
  	}
  		for( index in results) {
  			record = results[index]
        node_objs = []
  			for(var key in record) {
  				node_objs.push(new Node(key,record[key]))
  			}
        for(var parent in node_objs) {
          for(var child in node_objs) {
            if(parent == child)
              continue
            add_relationship({type: parent.type,label: parent.label},{type: child.type, label: child.label})
          }
        }
  		}
	})
}