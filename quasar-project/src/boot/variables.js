/* eslint-disable indent */
var envprod = false
var envdo = false//true
var envdodev = false
var target = ''
var auth = 'https://auth.pishock.com'
if (envprod) {
  target = 'https://pss.pishock.com'
} else if (envdo) {
  target = 'https://do.pishock.com'
} else if (envdodev) {
  target = 'https://devwatch.pishock.com'
} else {
  target = 'http://localhost:5000/'//'https://192.168.1.12:45462'
}

var v3target = 'dev.pishock.com'
// 'https://fedack-didactic-space-eureka-rp46xrj4pwhp9q-5000.preview.app.github.dev'
const vars = {
  envprod: envprod,
  target: target,
  v3target: v3target,
  auth: auth
}

const iH = function(con, func) {
  if (
    con.connectionState !== 'Connected' &&
    con.connectionState !== 'Reconnecting' &&
    con.connectionState !== 'Connecting'
  ) {
    con.start().catch(err => {
      console.log(err)
      con.start()
    })
    setTimeout(() => {
      if (con.connectionState === 'Connected') {
        func()
      }
    }, 2000)
  } else if (con.connectionState === 'Connected') {
    func()
  }
}

export default ({ app }) => {
    
  app.config.globalProperties.$vars = vars
  app.config.globalProperties.$iH = iH
  app.provide('$vars', vars);
}
