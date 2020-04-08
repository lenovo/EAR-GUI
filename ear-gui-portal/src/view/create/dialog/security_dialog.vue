<template>
  <div>
    <a-modal
      :title="$t('Params.Model.Add.Title', {value: $t(`Params.EnergyTag.${mode}`)})"
      :visible="visible"
      :width='width'
      @cancel="handleCancel">
        <a-form :form="form" layout='vertical'  class="params-model-form">
          <!-- form left -->
          <div class="params-model-col">
            <a-form-item :label='$t("Params.EnergyTag")'>
              <a-input 
                v-decorator="[
                'EnergyTag',
                {rules: [{ required: true, message: $t('Input.Required.Message', {label: 'EnergyTag'}) }]}]"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.EnergyTag.pstate")'>
              <a-input v-decorator="['pstate']"></a-input>
            </a-form-item>
            <a-form-item v-if="mode == 'limited'" :label='$t("Params.EnergyTag.users")'>
              <a-input v-decorator="['users']"></a-input>
            </a-form-item>
          </div>
          <!-- form right -->
          <div v-if="mode == 'limited'" class="params-model-col" style="border-left: 1px solid #e8e8e8;">
            <a-form-item :label='$t("Params.EnergyTag.groups")'>
              <a-input v-decorator="['groups']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.EnergyTag.accounts")'>
              <a-input v-decorator="['accounts']"></a-input>
            </a-form-item>
            
          </div>
        </a-form>
        
      <template slot="footer">
        <a-button key="back" @click="handleCancel">{{$t('Button.Cancel')}}</a-button>
        <a-button key="submit" type="primary" :loading="loading" :disabled="false" @click="handleAdd">{{$t('Button.Add')}}</a-button>
      </template>
    </a-modal>
  </div>
</template>
<script>

export default {
  data() {
    return {
      mode: 'general',
      width: '430px',
      visible: false,
      loading: false,
      innerResolve: null,
      innerReject: null
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleAdd() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.visible = false
          this.loading = false;
          this.innerResolve(values)
        }
      });   
    },
    handleCancel(e) {
      this.visible = false
      this.loading = false;
      this.innerReject('Canceled')
    },
    addEnergyTagParams() {
      this.form.resetFields();
      this.visible = true;
      this.loading = false;
      return new Promise((resolve, reject) => {
        this.innerResolve = resolve;
        this.innerReject = reject;
      });
    },
    generalEnergyTag() {
      this.mode = 'general'
      this.width = '430px'
      return this.addEnergyTagParams()
    },
    limitedEnergyTag() {
      this.mode = 'limited'
      this.width = '800px'
      return this.addEnergyTagParams()
    },
    onFocus() {
      this.$emit('focus-change', true);
    },
    onBlur() {
      this.$emit('focus-change', false);
    },
  }
}
</script>

<style>
.params-model-form {
  display: flex;
}
.params-model-form .ant-input {
  width: 280px;
}
.params-model-col {
  width: 100%;
  padding: 0 50px;
}
  
</style>