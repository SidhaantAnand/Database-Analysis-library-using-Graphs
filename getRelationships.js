var NodeMap = require('./NodeMap.js')

var maps = NodeMap.maps


module.exports.get_relationships = function(node) {
	if(Object.keys(maps) == []) 
		throw "No table has been graphified. No nodes exists"

	if(!maps[node['type']])
		throw "No such 'type' as " + node['type'] + " found"

	if(!maps[node['type']].get(node['label']))
		throw "No such 'label' as " + node['label'] + " in " + node['type']

	return maps[node['type']].get(node['label'])
}