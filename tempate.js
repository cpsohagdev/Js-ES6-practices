var date = new Date()
var secont = date.getSeconds()
let minite = date.getMinutes()
let hours = date.getHours()


//let time = (secont + ':' + minite + ':' + hours)
let template = `${secont}:${minite}:${hours}`
console.log(template)