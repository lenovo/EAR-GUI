<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.EARGM')}}</h2>
    <div  class="params-body-form-content">
      <div class="params-form-col">
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerHost')">{{$t("Params.GlobalManagerHost")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerHost" @focus="onFocus('GlobalManagerHost')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerPort')">{{$t("Params.GlobalManagerPort")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerPort" @focus="onFocus('GlobalManagerPort')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerUseAggregated')">{{$t("Params.GlobalManagerUseAggregated")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerUseAggregated" @focus="onFocus('GlobalManagerUseAggregated')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerPeriodT1')">{{$t("Params.GlobalManagerPeriodT1")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerPeriodT1" @focus="onFocus('GlobalManagerPeriodT1')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerPeriodT2')">{{$t("Params.GlobalManagerPeriodT2")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerPeriodT2" @focus="onFocus('GlobalManagerPeriodT2')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerUnits')">{{$t("Params.GlobalManagerUnits")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerUnits" @focus="onFocus('GlobalManagerUnits')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('GlobalManagerEnergyLimit')">{{$t("Params.GlobalManagerEnergyLimit")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerEnergyLimit" @focus="onFocus('GlobalManagerEnergyLimit')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;" v-if="!isQuick">
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerPolicy')">{{$t("Params.GlobalManagerPolicy")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerPolicy" @focus="onFocus('GlobalManagerPolicy')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerMode')">{{$t("Params.GlobalManagerMode")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerMode" @focus="onFocus('GlobalManagerMode')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerMail')">{{$t("Params.GlobalManagerMail")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerMail" @focus="onFocus('GlobalManagerMail')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerWarningsPerc')">{{$t("Params.GlobalManagerWarningsPerc")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerWarningsPerc" @focus="onFocus('GlobalManagerWarningsPerc')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerGracePeriods')">{{$t("Params.GlobalManagerGracePeriods")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerGracePeriods" @focus="onFocus('GlobalManagerGracePeriods')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerVerbose')">{{$t("Params.GlobalManagerVerbose")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerVerbose" @focus="onFocus('GlobalManagerVerbose')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('GlobalManagerUseLog')">{{$t("Params.GlobalManagerUseLog")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.GlobalManagerUseLog" @focus="onFocus('GlobalManagerUseLog')" @blur="onBlur"></a-input>
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
  props: ['value', 'createType'],
  computed: {
    isQuick() {
      return this.createType == 'Quick'
    }
  },
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