// This will not be exposed to the users
var NodeMap = require('./NodeMap.js')

var maps = NodeMap.maps


module.exports.add_relationship = function(parent,child) {
	if(Object.keys(maps) == []) 
		throw "No table has been graphified. No nodes exists"

	if(!maps[parent[type]])
		throw "No such type as " + parent[type] + " found"

	if(!maps[parent[type]].get(parent[label]))
		throw "No such label as " + parent[label] + " in " + parent[type]

	for (relation of maps[parent[type]].get(parent[label])) {
		if(JSON.stringify(relation) == JSON.stringify(child))
			return
	}

	maps[parent[type]].get(parent[label]).push(child)
	NodeMap.set(maps)
}