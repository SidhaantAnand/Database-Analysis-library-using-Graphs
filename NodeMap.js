/* This maintains a JSON where each type has a map:
	{
		'person' : <Map of all labels as keys and edge arrays as value
	}
*/

var maps = {}

function get() {
	return maps
}

function set(maps) {
	this.maps = maps
}

module.exports = {
	maps: maps,
	get: get,
	set: set
}