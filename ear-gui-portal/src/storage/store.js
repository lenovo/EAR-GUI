/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import Settings from './setting-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings: Settings
  }
})

export default store
