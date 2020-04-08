<template>
  <div>
    <h2 class="params-model-titel">{{$t('Params.Tree.Security')}}</h2>
    <div class="params-body-form-content">
      <!-- form left -->
      <div class="params-form-col">
        <a-form-item>
          <span slot="label"  @click="onFocus('AuthorizedUsers')">{{$t("Params.AuthorizedUsers")}}
            <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.AuthorizedUsers" @focus="onFocus('AuthorizedUsers')" @blur="onBlur"></a-input>
        </a-form-item>
        <a-form-item>
          <span slot="label"  @click="onFocus('AuthorizedAccounts')">{{$t("Params.AuthorizedAccounts")}}
            <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.AuthorizedAccounts" @focus="onFocus('AuthorizedAccounts')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
      <!-- form right -->
      <div class="params-form-col" style="border-left: 1px solid #e8e8e8;">
        <a-form-item>
          <span slot="label"  @click="onFocus('AuthorizedGroups')">{{$t("Params.AuthorizedGroups")}}
            <a-icon type="question-circle-o" class="params-help-icon"/>
          </span>
          <a-input v-model="value.AuthorizedGroups" @focus="onFocus('AuthorizedGroups')" @blur="onBlur"></a-input>
        </a-form-item>
      </div>
    </div>
    <a-row class="params-content-sceurity-table">
      <div class="params-form-col m-b-10">
        <span @click="onFocus('EnergyTag')">{{$t('Params.EnergyTag.general')}}
          <a-icon type="question-circle-o" class="params-help-icon"/>
        </span>
      </div>
      <div class="params-form-col m-b-10">
        <a-button type='primary' class="m-r-20" @click="onCreate('general')">{{$t('Button.Create')}}</a-button>
        <a-button @click="onDelete('general')" :disabled="disableGeneralDel">{{$t('Button.Delete')}}</a-button>
      </div>
      <div  class="params-form-col">
        <a-table
          :rowSelection="{selectedRowKeys: generalSelection, onChange: onGeneralSelectChange}"
          :columns="generalColumns"
          :rowKey="record => record.EnergyTag"
          :dataSource="value.general_energy_tags"
          :pagination="false" bordered>

        </a-table>
      </div>
    </a-row>
    <a-row class="params-content-sceurity-table">
      <div class="params-form-col m-b-10">
        <span @click="onFocus('EnergyTag')">{{$t('Params.EnergyTag.limited')}}
          <a-icon type="question-circle-o" class="params-help-icon"/>
        </span>
      </div>
      <div class="params-form-col m-b-10">
        <a-button type='primary' class="m-r-20" @click="onCreate('limited')">{{$t('Button.Create')}}</a-button>
        <a-button @click="onDelete('limited')" :disabled="disableLimitedlDel">{{$t('Button.Delete')}}</a-button>
      </div>
      <div  class="params-form-col">
        <a-table
          :rowSelection="{selectedRowKeys: limitedSelection, onChange: onLimitedSelectChange}"
          :columns="limitedColumns"
          :rowKey="record => record.EnergyTag"
          :dataSource="value.limited_energy_tags"
          :pagination="false" bordered>

        </a-table>
      </div>
    </a-row>
    <security-dialog ref="securityDialog" />
  </div>
</template>

<script>
import SecurityDialog from './../dialog/security_dialog'

export default {
  data() {
    return {
      generalColumns: [{
        dataIndex: 'EnergyTag',
        align: 'center',
        title: this.$t('Params.EnergyTag')
      },{
        dataIndex: 'pstate',
        align: 'center',
        title: this.$t('Params.EnergyTag.pstate')
      }],
      limitedColumns: [{
        dataIndex: 'EnergyTag',
        align: 'center',
        title: this.$t('Params.EnergyTag')
      },{
        dataIndex: 'pstate',
        align: 'center',
        title: this.$t('Params.EnergyTag.pstate')
      },{
        dataIndex: 'users',
        align: 'center',
        title: this.$t('Params.EnergyTag.users')
      },{
        dataIndex: 'groups',
        align: 'center',
        title: this.$t('Params.EnergyTag.groups')
      },{
        dataIndex: 'accounts',
        align: 'center',
        title: this.$t('Params.EnergyTag.accounts')
      }],
      generalSelection: [],
      limitedSelection: []
    }
  },
  components: {
    SecurityDialog
  },
  props: ['value'],
  computed: {
    disableGeneralDel() {
      return this.generalSelection.length  < 1;
    },
    disableLimitedlDel() {
      return this.limitedSelection.length  < 1;
    }
  },
  methods: {
    onFocus(val) {
      console.log(this.value);
      
      this.$emit('focus-change', true, val);
    },
    onBlur() {
      this.$emit('focus-change', false);
    },
    getTabColumns(obj) {
      var temp = [];
      for (var key in obj) {
        temp.push({
          dataIndex: key,
          align: 'center',
          title: this.$t(`Params.EnergyTag.${key}`)
        })
      }
      return temp
    },
    onGeneralSelectChange (selectedRowKeys) {
      this.generalSelection = selectedRowKeys
    },
    onLimitedSelectChange (selectedRowKeys) {
      this.limitedSelection = selectedRowKeys
    },
    onCreate(mode) {
      this.$refs.securityDialog[`${mode}EnergyTag`]().then(res => {
        this.value[`${mode}_energy_tags`].push(res)
      }).catch(err => {

      })
    },
    onDelete(mode) {
      var poplist = this[`${mode}Selection`];
      var data = [...this.value[`${mode}_energy_tags`]];
      var target = data.filter(item => !poplist.includes(item.EnergyTag))
      if(target) {
        this.value[`${mode}_energy_tags`] = target
      }
      this[`${mode}Selection`] = [];
    }
  }
}
</script>

<style >
  .params-content-sceurity-form {
    width: 100%;
    display: flex;
  }
  .params-content-sceurity-table {
    width: 750px;
    margin-top: 20px;
  }
</style>