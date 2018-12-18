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
// 获取文件夹列表 xls
function readdir (path) {
  let fileNameMap = []
  let fileNameList = []
  let files = fs.readdirSync(path, 'utf-8')
  files.forEach((fileName, index) => {
    let idx = fileName.lastIndexOf('.')
    let tmpFlag = fileName.substr(idx + 1)
    if (tmpFlag === 'xls') {
      fileNameList.push(fileName)
    }
  })
  fileNameList.forEach((fileName, index) => {
    fileNameMap.push({
      idx: index + 1,
      name: fileName
    })
  })
  return fileNameMap
}

export default {
  readdir,
  access
}
