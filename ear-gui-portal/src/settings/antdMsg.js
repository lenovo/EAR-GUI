/*
 * Copyright © 2020-present Lenovo
 *
 * This file is licensed under both the BSD-3 license for individual/non-commercial use and
 * EPL-1.0 license for commercial use. Full text of both licenses can be found in
 * COPYING.BSD and COPYING.EPL files.
 */

import antd_zh_cn from 'ant-design-vue/lib/locale-provider/zh_CN'
import antd_en_us from 'ant-design-vue/lib/locale-provider/en_US'

import moment from 'moment';
import 'moment/locale/zh-cn';


moment.locale(window.EarApp.$i18n.locale);

export default {
  "en":     antd_en_us,
  "en-us":  antd_en_us,
  'zh':     antd_zh_cn,
  'zh-cn':  antd_zh_cn
}
