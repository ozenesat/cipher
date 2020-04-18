# rapicio
This is the javascript library for rapic.io operations

# install
`npm run install`

# supported operations
1) login()
2) getData("ProjectName", "ObjectName")
3) postData("ProjectName", "ObjectName", {"yourData": "here", "someOtherField": "another"})
4) updateData("ProjectName", "ObjectName", dataID, {"yourData": "newValue"})
5) deleteData("ProjectName", "ObjectName", dataID)

# example usage
```
var rapic = require('rapicio');

let rapicClient = rapic("username", "password");
await rapicClient.login() // login returns a promise, either use it in a async func or use .then()
let myData = await rapicClient.getData("ProjectName", "ObjectName") // getData returns a promise, either use it in a async func or use .then()
```
