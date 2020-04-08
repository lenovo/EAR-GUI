<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.Database')}}</h2>
    <div class="params-body-form-content m-b-20">
      <div class="params-form-col">
        <a-form-item>
          <span slot="label"  @click="onFocus('MariaDBIp')">{{$t("Params.MariaDBIp")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBIp" @focus="onFocus('MariaDBIp')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('MariaDBPort')">{{$t("Params.MariaDBPort")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBPort" @focus="onFocus('MariaDBPort')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('MariaDBUser')">{{$t("Params.MariaDBUser")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBUser" @focus="onFocus('MariaDBUser')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('MariaDBPassw')">{{$t("Params.MariaDBPassw")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBPassw" @focus="onFocus('MariaDBPassw')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('MariaDBCommandsUser')">{{$t("Params.MariaDBCommandsUser")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBCommandsUser" @focus="onFocus('MariaDBCommandsUser')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('MariaDBCommandsPassw')">{{$t("Params.MariaDBCommandsPassw")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBCommandsPassw" @focus="onFocus('MariaDBCommandsPassw')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item v-if="isQuick">
          <span slot="label"  @click="onFocus('MariaDBPassw')">{{$t("Params.MariaDBPassw")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBPassw" @focus="onFocus('MariaDBPassw')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="isQuick">
          <span slot="label"  @click="onFocus('MariaDBCommandsUser')">{{$t("Params.MariaDBCommandsUser")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBCommandsUser" @focus="onFocus('MariaDBCommandsUser')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="isQuick">
          <span slot="label"  @click="onFocus('MariaDBCommandsPassw')">{{$t("Params.MariaDBCommandsPassw")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBCommandsPassw" @focus="onFocus('MariaDBCommandsPassw')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('MariaDBDatabase')">{{$t("Params.MariaDBDatabase")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MariaDBDatabase" @focus="onFocus('MariaDBDatabase')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('MaxConnections')">{{$t("Params.MaxConnections")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.MaxConnections" @focus="onFocus('MaxConnections')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('ReportNodeDetail')">{{$t("Params.ReportNodeDetail")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch ref='ReportNodeDetail' v-model="value.ReportNodeDetail" checkedChildren="1" unCheckedChildren="0" @focus="onFocus('ReportNodeDetail')" @blur="onBlur"/>
          <!-- <a-switch v-model="value.ReportNodeDetail" checkedChildren="1" unCheckedChildren="0" @focus="onFocus('ReportNodeDetail')" @blur="onBlur" /> -->
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('ReportSigDetail')">{{$t("Params.ReportSigDetail")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.ReportSigDetail" checkedChildren="1" unCheckedChildren="0" @focus="onFocus('ReportSigDetail')" @blur="onBlur" />
        </a-form-item>
        <a-form-item v-if="!isQuick">
          <span slot="label"  @click="onFocus('ReportLoops')">{{$t("Params.ReportLoops")}}
              <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-switch v-model="value.ReportLoops" checkedChildren="1" unCheckedChildren="0" @focus="onFocus('ReportLoops')" @blur="onBlur" />
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