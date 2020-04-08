<template>
  <div>
    <a-modal
      :title="$t('Params.Model.Add.Title', {value: $t('Params.Tree.SpecialNodes')})"
      :visible="visible"
      width='430px'
      @cancel="handleCancel">
        <a-form :form="form" layout='vertical'  class="params-model-form">
          <!-- form left -->
          <div class="params-model-col">
            <a-form-item :label='$t("Params.SpecialNodes.NodeName")'>
              <a-input 
                v-decorator="[
                'NodeName',
                {rules: [{ required: true, message: $t('Input.Required.Message', {label: 'NodeName'}) }]}]"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.SpecialNodes.CPUs")'>
              <a-input v-decorator="['CPUs']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.SpecialNodes.DefaultPstates")'>
              <a-input v-decorator="['DefaultPstates']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.SpecialNodes.DefCoefficientsFile")'>
              <a-input v-decorator="['DefCoefficientsFile']"></a-input>
            </a-form-item>

          </div>
          <!-- form right -->
          <!-- <div class="params-model-col" style="border-left: 1px solid #e8e8e8;">
            
          </div> -->
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
    addSpecialNodesParams() {
      this.form.resetFields();
      this.visible = true;
      this.loading = false;
      return new Promise((resolve, reject) => {
        this.innerResolve = resolve;
        this.innerReject = reject;
      });
      
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