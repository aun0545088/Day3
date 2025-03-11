const yaml = require("js-yaml")

let yamlStr = `
name: Aun Mohammad
hobby: gardening
city: Kanpur`

let yamlObj = yaml.load(yamlStr)
let yamlStringified = yaml.dump(yamlObj);
console.log("yamlObj",yamlObj.name)
console.log("yamlStringified",yamlStringified)