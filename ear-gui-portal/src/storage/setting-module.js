/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import Session from './../common/session'
import Utils from './../common/utils'

const state = {
  innerData: ''
}

const mutations = {
  setConfig(state, payload) {
    for (var attr in payload) {
      state[attr] = payload[attr];
      Session.setValue(attr, JSON.stringify(payload[attr]));
    }
  }
}

const actions = {
  init(context) {
    context.commit('setConfig', {
      innerData: '',
    });
  },
  setInnerData(context, data) {
    context.commit('setConfig', {
      innerData: data,
    });
  }
  
}

const getters = {
  getInnerData: state => {
    var data = Session.getValue('innerData', '')
    return state.innerData || JSON.parse(data);
  },

}


const settingsModule = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
}

export default settingsModule
