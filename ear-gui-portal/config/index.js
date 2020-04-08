/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

var remoteHost = 'localhost'

try {
  var reg = /^-([0-9]{1,3}\.){3}[0-9]{1,3}$/
  const configArgv = JSON.parse(process.env.npm_config_argv)
  const original = configArgv.original.slice(1)
  remoteHost = reg.test(original[1]) ? original[1].replace(/-/g, '') : '';
 
} catch(err) {

}
console.log('http://' + remoteHost);
console.log('\n');

const index = 'public/index.html';

const proxy = {
  '/api': {
    target: 'http://' + remoteHost,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api': '/api'
    }
  },
  '/download': {
    target: 'http://' + remoteHost,
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/download': '/download'
    }
  }
}

module.exports = {
  remoteHost,
  index,
  proxy
}
