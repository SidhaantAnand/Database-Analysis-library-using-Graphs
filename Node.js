var NodeMap = require('./NodeMap.js')

var maps = NodeMap.get()

class Node {
  constructor(type,label) {
    this.label = label
    this.type = type

    if(!maps[type]) {
      var newMap = new Map()
      newMap.set(label,[])
      maps[type] = newMap
      NodeMap.set(maps)
      return
    }
    maps.type.set(label,[])
    NodeMap.set(maps)

  }
}
module.exports=Node

/* What they should do : feed in table, feed in a certain node to get relationship, feed in a certain type and get all relationships, get all 