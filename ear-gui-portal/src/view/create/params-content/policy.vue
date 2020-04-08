<template>
  <div class="params-body-form-content-policy">
    <h2 class="params-model-titel">{{$t('Params.Tree.Policy')}}</h2>
    <a-form-item class="m-l-20">
      <span slot="label"  @click="onFocus('DefaultPowerPolicy')">{{$t("Params.DefaultPowerPolicy")}}
          <a-icon type="question-circle-o" class="params-help-icon"/>
      </span>
      <a-input v-model="value.DefaultPowerPolicy" @focus="onFocus('DefaultPowerPolicy')" @blur="onBlur" style="width: 280px;"></a-input>
    </a-form-item>
    <div class="m-l-20 m-b-10" @click="onFocus('Policy')">{{$t('Params.Policy')}}<a-icon type="question-circle-o" class="params-help-icon"/></div>
    <a-table :columns="columns" :dataSource="value.policys" :rowKey="record => record.Policy" :pagination="false" bordered class="m-l-20" style="width: 600px;">
      <span slot='PolicyTitle'>{{$t(`Params.Policy.Policy`)}}</span>
      <span slot='SettingsTitle'>{{$t(`Params.Policy.Settings`)}}</span>
      <span slot='DefaultFreqTitle'>{{$t(`Params.Policy.DefaultFreq`)}}</span>
      <span slot='PrivilegedTitle'>{{$t(`Params.Policy.Privileged`)}}</span>

      <template v-for="col in ['Policy', 'Settings', 'DefaultFreq', 'Privileged']" :slot="col" slot-scope="text, record">
        <div :key="col">
          <a-input
            class="params-content-policy-input"
            style="margin: -5px 0"
            :value="text"
            @focus="onFocus('Policy')" @blur="onBlur"
            @change="e => handleChange(e.target.value, record.Policy, col)"
          />
        </div>
      </template>
    </a-table>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      columns: [{
        dataIndex: 'Policy',
        align: 'center',
        slots: { title: 'PolicyTitle'},
      },{
        dataIndex: 'Settings',
        align: 'center',
        slots: { title: 'SettingsTitle'},
        scopedSlots: { customRender: 'Settings' },
      },{
        dataIndex: 'DefaultFreq',
        align: 'center',
        slots: { title: 'DefaultFreqTitle'},
        scopedSlots: { customRender: 'DefaultFreq' },
      },{
        dataIndex: 'Privileged',
        align: 'center',
        slots: { title: 'PrivilegedTitle'},
        scopedSlots: { customRender: 'Privileged' },
      }],
      data: this.value
    }
  },
  props: ['value'],
  methods: {
    onFocus(val) {
      this.$emit('focus-change', true, val);
    },
    onBlur() {
      this.$emit('focus-change', false);
    },
    handleChange (value, key, column) {
      const newData = [...this.value.policys]
      const target = newData.filter(item => key === item.Policy)[0]
      if (target) {
        target[column] = value
        this.value.policys = newData
      }
      
    },
  }
}
</script>

<style >
  .params-body-form-content-policy {
    /* width: 900px; */
    padding-bottom: 40px;
    /* padding: 50px 100px; */
  }
  .params-content-policy-input {
    text-align: right;
    width: 100px;
  }
</style>