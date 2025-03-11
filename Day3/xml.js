const {DOMParser, XMLSerializer} = require("xmldom")

let xmlStr = `<person>
<name>Aun Mohammad</name>
<hobby>gardening</hobby>
<city>Kanpur</city>
</person>`

let parser = new DOMParser()
let xmlDoc = parser.parseFromString(xmlStr,"text/xml")

let serializer = new XMLSerializer()
let xmlStringified = serializer.serializeToString(xmlDoc)
console.log("xmlDoc",xmlDoc.getElementsByTagName("name")[0].textContent)
console.log("xmlStringified",xmlStringified)