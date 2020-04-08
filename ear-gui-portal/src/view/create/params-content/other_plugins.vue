<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.OtherPlugins')}}</h2>
    <div class="params-body-form-content m-b-20">
      <div class="params-form-col">
        <a-form-item>
          <span slot="label"  @click="onFocus('PluginEnergy')">{{$t("Params.PluginEnergy")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.PluginEnergy" @focus="onFocus('PluginEnergy')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item>
          <span slot="label"  @click="onFocus('PluginPowerModel')">{{$t("Params.PluginPowerModel")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.PluginPowerModel" @focus="onFocus('PluginPowerModel')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: ['value'],
  methods: {
    onFocus(val) {
      this.$emit('focus-change', true, val);
    },
    onBlur() {
      this.$emit('focus-change', false);
    }
  }
}
</script>

<style >
  
</style>