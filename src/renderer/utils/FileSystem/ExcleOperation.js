const fs = require('fs')
const xlsx = require('node-xlsx')
// 写xlsx
function writeExcle (data, name) {
  var buffer = xlsx.build(data)
  fs.writeFile('./static/docs/' + name, buffer, function (err) {
    if (err) {
      return false
    } else {
      return true
    }
  }
  )
}
// 读xlsx
function readExcle (name) {
  const data = xlsx.parse('./static/docs/' + name)
  return JSON.stringify(data)
}
export default {
  writeExcle,
  readExcle
}
