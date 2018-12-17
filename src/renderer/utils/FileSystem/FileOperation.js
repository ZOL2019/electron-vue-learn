const fs = require('fs')
// 判断文件或文件夹是否存在
function access () {
  fs.access('./static/docs', fs.constants.F_OK, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('存在')
  })
}
// 获取文件夹列表
function readdir (path) {
  path = './static/docs'
  return new Promise(function (resolve, reject) {
    fs.readdir('./static/docs', function (err, data) {
      if (err) reject(err)
      let dirList = []
      if (data && data.length) {
        data.forEach(function (fileName) {
          dirList.push(fileName + '')
        })
      }
    })
  })
}

export default {
  readdir,
  access
}
