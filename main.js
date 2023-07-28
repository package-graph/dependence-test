// 构建依赖图
let rootJson = require('./package.json')

// 依赖map防止依赖重复
let dependenceMap = new Map()
// 依赖节点数组 name -> version
let dependenceNode = [];
// 依赖连接关系 source -> target
let dependenceLink = [];
function recursionDependencies(json){
  if(dependenceMap.has(json.name)){
    // 如果已经存在依赖，直接返回 todo feature 多版本依赖
    return;
  } else {
    dependenceNode.push({
      name: json.name,
      version: json.version
    });
    dependenceMap.set(json.name, json.version);
    let dependencies = json.dependencies;
    for(let key in dependencies){
      dependenceLink.push({
        source: {
          name: json.name,
          version: json.version
        },
        target: {
          name: key,
          version: dependencies[key],
        }
      });
      let dependenceJson = require('./node_modules/' + key + '/package.json');
      recursionDependencies(dependenceJson);
    }
  }

}
recursionDependencies(rootJson);
console.log(dependenceNode);
console.log(dependenceLink);