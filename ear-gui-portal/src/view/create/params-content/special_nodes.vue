<template>
  <div class="params-content-specialnodes">
    <h2 class="params-model-titel" @click="onFocus('SpecialNodes')">{{$t('Params.Tree.SpecialNodes')}}
      <a-icon type="question-circle-o" class="params-help-icon"/>
    </h2>
    <div class="params-form-col m-b-10">
      <a-button type='primary' class="m-r-20" @click="onCreate">{{$t('Button.Create')}}</a-button>
      <a-button @click="onDelete" :disabled="disabledDel">{{$t('Button.Delete')}}</a-button>
    </div>
    <div  class="params-form-col">
      <a-table
        :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
        :columns="columns"
        :dataSource="value.special_nodes" 
        :rowKey="record => record.NodeName" 
        :pagination="false" bordered>

      </a-table>
    </div>
    <special-nodes-dialog ref="specialNodesDialog" />
  </div>
</template>

<script>
import SpecialNodesDialog from './../dialog/special_nodes_dialog'
export default {
  data() {
    return {
      columns: [{
        dataIndex: 'NodeName',
        title: this.$t('Params.SpecialNodes.NodeName')
      },{
        dataIndex: 'CPUs',
        title: this.$t('Params.SpecialNodes.CPUs')
      },{
        dataIndex: 'DefaultPstates',
        title: this.$t('Params.SpecialNodes.DefaultPstates')
      },{
        dataIndex: 'DefCoefficientsFile',
        title: this.$t('Params.SpecialNodes.DefCoefficientsFile')
      }],
      selectedRowKeys: []
    }
  },
  components: {
    SpecialNodesDialog
  },
  props: ['value'],
  computed: {
    disabledDel() {
      return this.selectedRowKeys.length < 1;
    }
  },
  methods: {
    onFocus(val) {
      this.$emit('focus-change', true, val);
    },
    onBlur() {
      this.$emit('focus-change', false);
    },
    onSelectChange (selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys
    },
    onCreate() {
      this.$refs.specialNodesDialog.addSpecialNodesParams().then(res => {
        this.value.special_nodes.push(res)
      }).catch(err => {

      })
    },
    onDelete() {
      var poplist = this.selectedRowKeys;
      var data = [...this.value.special_nodes];
      var target = data.filter(item => !poplist.includes(item.NodeName))
      if(target) {
        this.value.special_nodes = target
      }
      this.selectedRowKeys = [];
    }
  }
}
</script>

<style >
  .params-content-specialnodes {
    width: 100%;
    padding-top: 40px;
  }
</style>