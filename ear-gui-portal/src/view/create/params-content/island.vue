<template>
  <div style="margin: 40px 0 0">
    <h2 class="params-model-titel" @click="onFocus('Island')">{{$t('Params.Tree.Island')}}
      <a-icon type="question-circle-o" class="params-help-icon"/>
    </h2>
    <div class="params-form-col m-b-10">
        <a-button type='primary' class="m-r-20" @click="onCreate">{{$t('Button.Create')}}</a-button>
        <a-button @click="onDelete" :disabled="!enableDel">{{$t('Button.Delete')}}</a-button>
      </div>
      <div  class="params-form-col">
        <a-table  
          :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
          :columns="columns"
          :dataSource="value.islands"
          :rowKey="record => record.Nodes"
          :pagination="false" bordered>
        </a-table>
      </div>
      <island-dialog ref='islandDialog' />
  </div>
</template>

<script>
import IslandDialog from './../dialog/island_dialog'

export default {
  data() {
    return {
      columns: [{
        dataIndex: 'Island',
        title: this.$t('Params.Island')
      },{
        dataIndex: 'Nodes',
        title: this.$t('Params.Island.Nodes')
      },{
        dataIndex: 'DBIP',
        title: this.$t('Params.Island.DBIP')
      },{
        dataIndex: 'DBSECIP',
        title: this.$t('Params.Island.DBSECIP')
      },{
        dataIndex: 'min_power',
        title: this.$t('Params.Island.min_power')
      },{
        dataIndex: 'max_power',
        title: this.$t('Params.Island.max_power')
      },{
        dataIndex: 'error_power',
        title: this.$t('Params.Island.error_power')
      },{
        dataIndex: 'max_temp',
        title: this.$t('Params.Island.max_temp')
      }],
      selectedRowKeys: []
    }
  },
  components:{
    IslandDialog
  },
  props: ['value'],
  computed: {
    enableDel() {
      return this.selectedRowKeys.length  > 0
        && this.value.islands.length > 1
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
      this.$refs.islandDialog.addIslandParams().then(res => {

        this.value.islands.push(res)
      }).catch(err => {

      })
    },
    onDelete() {
      var poplist = this.selectedRowKeys;
      var data = [...this.value.islands];
      var target = data.filter(item => !poplist.includes(item.Nodes))
      if(target) {
        this.value.islands = target
      }
      this.selectedRowKeys = [];
    }
  }
}
</script>

<style >
  
</style>