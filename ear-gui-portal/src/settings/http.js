/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Axios.interceptors.request.use(
  config => {
    return config
  },
  err => {

    return Promise.reject(err)
  },
)

Axios.interceptors.response.use(
  response => {
    return response
  },
  err => {
    return Promise.reject(err)
  },
)

Vue.use(VueAxios, Axios)
