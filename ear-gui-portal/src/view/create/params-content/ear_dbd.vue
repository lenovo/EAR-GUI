<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.EARDBD')}}</h2>
    <div class="params-body-form-content" >
      <div class="params-form-col">
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonPortTCP')">{{$t("Params.DBDaemonPortTCP")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonPortTCP" @focus="onFocus('DBDaemonPortTCP')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonPortSecTCP')">{{$t("Params.DBDaemonPortSecTCP")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonPortSecTCP" @focus="onFocus('DBDaemonPortSecTCP')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonSyncPort')">{{$t("Params.DBDaemonSyncPort")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonSyncPort" @focus="onFocus('DBDaemonSyncPort')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonAggregationTime')">{{$t("Params.DBDaemonAggregationTime")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonAggregationTime" @focus="onFocus('DBDaemonAggregationTime')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonInsertionTime')">{{$t("Params.DBDaemonInsertionTime")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonInsertionTime" @focus="onFocus('DBDaemonInsertionTime')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonMemorySize')">{{$t("Params.DBDaemonMemorySize")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonMemorySize" @focus="onFocus('DBDaemonMemorySize')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonMemorySizePerType')">{{$t("Params.DBDaemonMemorySizePerType")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.DBDaemonMemorySizePerType" @focus="onFocus('DBDaemonMemorySizePerType')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('DBDaemonUseLog')">{{$t("Params.DBDaemonUseLog")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.DBDaemonUseLog" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('DBDaemonUseLog')" @blur="onBlur" />
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