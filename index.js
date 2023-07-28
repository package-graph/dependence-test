// 构建依赖树
let json = require('./package.json')

let dependencies = json.dependencies
// 依赖map防止依赖重复
const dependenceMap = new Map()

dependenceMap.set(json.name, json.version);
const rootDependence = {
  name: json.name,
  version: json.version,
  dependencies: [],
  parent: null,
}
recursionDependencies(rootDependence, dependencies)
function recursionDependencies (root, dependencies) {
  for (let key in dependencies) {
    if(dependenceMap.has(key)) countinue;
    let dependence = {
      name: key,
      version: dependencies[key],
      dependencies: []
    }
    root.dependencies.push(dependence)
    dependence.parent = root
    let dependenceJson = require('./node_modules/' + key + '/package.json');
    console.log(dependenceJson.name, key);
    dependenceMap.set(key, dependencies[key])
    // recursionDependencies(dependence, dependencies[key].dependencies)
  }
}