<template>
  <div>
    <a-modal
      :title="$t('Params.Model.Add.Title', {value: $t('Params.Tree.Island')})"
      :visible="visible"
      width='800px'
      @cancel="handleCancel">
        <a-form :form="form" layout='vertical'  class="params-model-form">
          <!-- form left -->
          <div class="params-model-col">
            <a-form-item :label='$t("Params.Island")'>
              <a-input v-decorator="['Island']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.Nodes")'>
              <a-input 
                v-decorator="[
                'Nodes',
                {rules: [{ required: true, message: $t('Input.Required.Message', {label: 'Nodes'}) }]}]"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.DBIP")'>
              <a-input v-decorator="['DBIP']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.DBSECIP")'>
              <a-input v-decorator="['DBSECIP']"></a-input>
            </a-form-item>

          </div>
          <!-- form right -->
          <div class="params-model-col" style="border-left: 1px solid #e8e8e8;">
            <a-form-item :label='$t("Params.Island.min_power")'>
              <a-input v-decorator="['min_power']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.max_power")'>
              <a-input v-decorator="['max_power']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.error_power")'>
              <a-input v-decorator="['error_power']"></a-input>
            </a-form-item>
            <a-form-item :label='$t("Params.Island.max_temp")'>
              <a-input v-decorator="['max_temp']"></a-input>
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
    addIslandParams() {
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