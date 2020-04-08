<template>
  <div class="create-params">
    <div class="create-params-tabs">
      <h3 class="m-b-20">{{$t(`Create.Tabs.${activeTab}`)}}</h3>
      <div  class="create-params-tree">
        <a-anchor :getContainer='getContainer' class="Params-anchors">
          <a-anchor-link v-for="item in tree" :key='item'  :href="`${locationHsah}#Anchor-${item}`" :title="$t(`Params.Tree.${item}`)" />
        </a-anchor>
      </div>
      
      <a-button type="primary" @click="shiftCrateType">{{$t(`Create.Tabs.${shiftBut}`)}}</a-button>
    </div>
    <div class="create-params-content">
      <params-content
        ref="paramsContent"
        :create-type='activeTab'
        :data-type='selectedTree[0]'/>
      <!-- <div class="params-content-body height-100"></div> -->
      <div class="params-content-footer b-w">
        <a-button type='primary' :disabled='disabled' :loading='disabled' @click="onSubmit">{{$t('Button.Preview')}}</a-button>
        <a-button @click="goHome" class="m-l-20">{{$t('Button.Cancel')}}</a-button>
        <a-button v-if="isReset" @click="resetData" class="m-l-20">{{$t('Button.Reset')}}</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import ParamsContent from './create/params-content'
import ParamsService from './../service/config'

export default {
  data () {
    return {
      locationHsah: '#'+window.location.hash.split('#')[1],
      activeTab: 'Quick',
      selectedTree: ['Database'],
      customSelected: [],
      selected: [],
      treeData: ParamsService.paramsTree,
      disabled: false
    }
  },
  components: {
    ParamsContent
  },
  mounted() {
    if(this.$route.params.param == 'upload') {
      this.activeTab = 'Custom';
    }
  },
  computed: {
    tree() {
      this.$nextTick(_ => {
        this.disabled = false;
      })
      return this.treeData[this.activeTab]
    },
    shiftBut() {
      return this.activeTab == 'Custom'?'Quick':'Custom'
    },
    isReset() {
      return this.$route.params.param == 'upload'
    }
  },
  methods: {
    onSubmit() {
      this.$refs.paramsContent.submit()
    },
    goHome() {
      var _this = this
      this.$confirm({
        title: this.$t('Cancel.Confirm.Title'),
        content: this.$t('Cancel.Confirm.Message'),
        onOk() {
          _this.$router.push({path: '/home'})
        },
        onCancel() {},
      });
    },
    resetData() {
      var _this = this
      this.$confirm({
        title: this.$t('Reset.Confirm.Title'),
        content: this.$t('Reset.Confirm.Message'),
        onOk() {
          _this.$refs.paramsContent.resetData();
        },
        onCancel() {},
      });
    },
    shiftCrateType() {
      this.disabled = true;
      this.activeTab = this.activeTab == "Custom"?
        "Quick":"Custom";
      
      // if(val == 'Custom') {
      //   if(this.customSelected.length>0) {
      //     this.selectedTree = this.customSelected;
      //   }
      // }
      if(this.activeTab == 'Quick'){
        if(!this.treeData[this.activeTab].includes(this.selectedTree[0])) {
          this.selectedTree = [this.treeData[this.activeTab][0]];
        }
      }
    },
    onSelectedTree(val ,e) {
      if(e.selected) {
        this.selected = val;
      } else {
        this.selectedTree = this.selected;
      }

      // if(this.activeTab == 'Custom') {
      //   this.customSelected = this.selectedTree;
      // }
    },
    getContainer() {
      return document.getElementById('params-body-form')
    }
  }
}
</script>

<style>
  .create-params {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .create-params-tabs {
    min-width: 220px;
    padding: 15px;
    height: 100%;
    border-right: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
  }
  .Params-anchors {
    height: 100%;
    padding-left: 10px;
  }
  .create-params-tree {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .create-params-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: inset 3px 0 5px #e8e8e8;
  }
  .params-content-body {
    width: 100%;
    height: 90%;
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
  }
  .params-content-footer {
    /* height: 80px; */
    padding: 20px 40px;
    border-top: 1px solid #e8e8e8;
  }
</style>