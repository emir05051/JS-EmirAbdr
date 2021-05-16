let s = "log(10)(25)"
reLog = /log[\(]([\d]*)[\)][\(]([\d]*)[\)]/gm

x = s.replace(reLog, '$1')
y = s.replace(reLog, '$2')

const getLog = (x, y) => {
  return Math.log(y) / Math.log(x);
}

console.log(x, y)
console.log(getLog(x,y))
