<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.EARL')}}</h2>
    <div class="params-body-form-content">
      <div class="params-form-col">
        <a-form-item>
          <span slot="label"  @click="onFocus('CoefficientsDir')">{{$t("Params.CoefficientsDir")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.CoefficientsDir" @focus="onFocus('CoefficientsDir')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('DynAISLevels')">{{$t("Params.DynAISLevels")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DynAISLevels" @focus="onFocus('DynAISLevels')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('DynAISWindowSize')">{{$t("Params.DynAISWindowSize")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DynAISWindowSize" @focus="onFocus('DynAISWindowSize')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item>
          <span slot="label"  @click="onFocus('DynaisTimeout')">{{$t("Params.DynaisTimeout")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DynaisTimeout" @focus="onFocus('DynaisTimeout')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('LibraryPeriod')">{{$t("Params.LibraryPeriod")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.LibraryPeriod" @focus="onFocus('LibraryPeriod')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('CheckEARModeEvery')">{{$t("Params.CheckEARModeEvery")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.CheckEARModeEvery" @focus="onFocus('CheckEARModeEvery')" @blur="onBlur"></a-input>
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