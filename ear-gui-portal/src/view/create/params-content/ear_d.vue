<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.EARD')}}</h2>
    <div  class="params-body-form-content">
      <!-- form left -->
      <div class="params-form-col">
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeDaemonPort')">{{$t("Params.NodeDaemonPort")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.NodeDaemonPort" @focus="onFocus('NodeDaemonPort')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeDaemonPowermonFreq')">{{$t("Params.NodeDaemonPowermonFreq")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.NodeDaemonPowermonFreq" @focus="onFocus('NodeDaemonPowermonFreq')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeDaemonMaxPstate')">{{$t("Params.NodeDaemonMaxPstate")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.NodeDaemonMaxPstate" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('NodeDaemonMaxPstate')" @blur="onBlur" />
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeDaemonTurbo')">{{$t("Params.NodeDaemonTurbo")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.NodeDaemonTurbo" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('NodeDaemonTurbo')" @blur="onBlur" />
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeUseDB')">{{$t("Params.NodeUseDB")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.NodeUseDB" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('NodeUseDB')" @blur="onBlur" />
        </a-form-item>
        
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeDaemonVerbose')">{{$t("Params.NodeDaemonVerbose")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-slider v-model="value.NodeDaemonVerbose" :dots="true" v-decorator="['slider']"
            :tooltipVisible='false' :marks="{0:0, 1:1, 2:2, 3:3, 4:4}"
            :max='4' :min='0'  @focus="onFocus('NodeDaemonVerbose')" @blur="onBlur" />
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeUseLog')">{{$t("Params.NodeUseLog")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.NodeUseLog" @focus="onFocus('NodeUseLog')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('MinTimePerformanceAccuracy')">{{$t("Params.MinTimePerformanceAccuracy")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MinTimePerformanceAccuracy" @focus="onFocus('MinTimePerformanceAccuracy')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeForceFrequencies')">{{$t("Params.NodeForceFrequencies")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.NodeForceFrequencies" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('NodeForceFrequencies')" @blur="onBlur" />
        </a-form-item>
        <a-form-item >
          <span slot="label"  @click="onFocus('NodeUseEARDBD')">{{$t("Params.NodeUseEARDBD")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.NodeUseEARDBD" checkedChildren="1" unCheckedChildren="0"  @focus="onFocus('NodeUseEARDBD')" @blur="onBlur" />
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