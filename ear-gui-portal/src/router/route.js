/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

export default [
  {
    path: '/',
    meta: {
      auth: false
    },
    component: resolve => require(['../view/main'], resolve),
    children: [
      {
        path: 'home',
        meta: {
          auth: false
        },
        component: resolve => require(['../view/home'], resolve)
      },
      {
        path: 'create/:param?',
        meta: {
          auth: false
        },
        component: resolve => require(['../view/create'], resolve),
      },
    ]
  }
]