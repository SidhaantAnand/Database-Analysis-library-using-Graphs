var NodeMap = require('./NodeMap.js')

var maps = NodeMap.maps


module.exports.relationship_exists = function(node1,node2) {
	if(Object.keys(maps) == []) 
		throw "No table has been graphified. No nodes exists"
	if(!maps[node1['type']])
		throw "No such 'type' as " + node1['type'] + " found"
	if(!maps[node2['type']])
		throw "No such 'type' as " + node2['type'] + " found"
	if(!maps[node1['type']].get(node1['label']))
		throw "No such 'label' as " + node1['label'] + " in " + node1['type']
	if(!maps[node2['type']].get(node2['label']))
		throw "No such 'label' as " + node2['label'] + " in " + node2['type']

	for (relation of maps[node1['type']].get(node1['label'])) {
		if(JSON.stringify(relation) == JSON.stringify(node2))
			return true
	}
	return false
}