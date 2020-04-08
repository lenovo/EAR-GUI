<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.Common')}}</h2>
    <div class="params-body-form-content">
      <div class="params-form-col">
        <a-form-item >
          <span slot="label"  @click="onFocus('Verbose')">{{$t("Params.Verbose")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.Verbose" @focus="onFocus('Verbose')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('TmpDir')">{{$t("Params.TmpDir")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.TmpDir" @focus="onFocus('TmpDir')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('EtcDir')">{{$t("Params.EtcDir")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.EtcDir" @focus="onFocus('EtcDir')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item >
          <span slot="label"  @click="onFocus('InstDir')">{{$t("Params.InstDir")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.InstDir" @focus="onFocus('InstDir')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DataBasePathName')">{{$t("Params.DataBasePathName")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DataBasePathName" @focus="onFocus('DataBasePathName')" @blur="onBlur"></a-input>
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