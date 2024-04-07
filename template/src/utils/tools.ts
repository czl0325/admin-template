export const getAssetsFile = (url: string) => {
  return new URL(`../assets/images/${url}`, import.meta.url).href
}

export const downloadFile = (file: any, fileFormat: string, fileName = '') => {
  let flag = false
  const blob = new Blob([file]) // 构造一个blob对象来处理数据
  const name = fileFormat == null ? fileName : `${fileName}.${fileFormat}`

  // 对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
  // IE10以上支持blob但是依然不支持download
  if ("download" in document.createElement("a")) {
    // 支持a标签download的浏览器
    if ("msSaveOrOpenBlob" in navigator) {
      // @ts-ignore
      window.navigator.msSaveOrOpenBlob(blob, name)
      return
    }
    const link = document.createElement("a") // 创建a标签
    link.download = name // a标签添加属性
    link.style.display = "none"
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click() // 执行下载
    URL.revokeObjectURL(link.href) // 释放url
    document.body.removeChild(link) // 释放标签
    flag = true
  } else {
    // 其他浏览器
    // @ts-ignore
    navigator.msSaveBlob(blob, name)
    flag = true
  }
  return flag
}
