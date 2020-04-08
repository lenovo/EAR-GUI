<template>
  <div class="params-content-body">
    <a-form id="params-body-form" layout='vertical'  class="params-body-form">
      <!-- Data Base -->
      <database v-if="formData" v-model="formData" :create-type="createType" @focus-change="focusChange" id="Anchor-Database" />
      <!-- EARD -->
      <eard v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-EARD"/>
      <!-- EARDBD -->
      <eardbd v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-EARDBD"/>
      <!-- EARL -->
      <earl v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-EARL"/>
      <!-- EARGM -->
      <eargm v-if="formData" v-model="formData" :create-type="createType" @focus-change="focusChange" id="Anchor-EARGM"/>
      <!-- Common -->
      <common v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-Common"/>
      <!-- Power Policy Plugins -->
      <policy v-if="formData" v-model="formData" @focus-change="focusChange" id="Anchor-Policy"/>
      <!-- Other Plugins -->
      <otherplugins v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-OtherPlugins"/>
      <!-- Security -->
      <security v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-Security"/>
      <!-- Special NOdes -->
      <specialnodes v-if="formData&&createType == 'Custom'" v-model="formData" @focus-change="focusChange" id="Anchor-SpecialNodes"/>
      <!-- Island -->
      <island v-if="formData" v-model="formData" @focus-change="focusChange" id="Anchor-Island"/>
    </a-form>
    <div v-show='drawerVisible'  class="params-description">
      <h4 class="params-description-title">{{description.title}}</h4>
      <div class="params-description-body">
        <div>{{description.message}}</div>
      </div>
    </div>
    <preview-dialog ref='previewDialog' />
  </div>
</template>
<script>
import ParamsService from './../../service/config'
import Database from './params-content/database'
import Eard from './params-content/ear_d'
import Eardbd from './params-content/ear_dbd'
import Earl from './params-content/ear_l'
import Eargm from './params-content/ear_gm'
import Common from './params-content/common'
import Policy from './params-content/policy'
import Otherplugins from './params-content/other_plugins'
import Security from './params-content/security'
import Specialnodes from './params-content/special_nodes'
import Island from './params-content/island'
import PreviewDialog from './dialog/preview_dialog'
import Utils from './../../common/utils'

export default {
  data() {
    return {
      formData: false,
      drawerVisible: false,
      description: {
        title: '',
        message: ''
      }
    }
  },
  props: ['createType', 'dataType'],
  components: {
    Database,
    Eard,
    Eardbd,
    Earl,
    Eargm,
    Common,
    Policy,
    Otherplugins,
    Security,
    Specialnodes,
    Island,
    PreviewDialog
  },
  mounted() {
    if(this.$store.getters['settings/getInnerData']){
      this.formData = Utils.deepCopy(this.$store.getters['settings/getInnerData']);
    }else {
      this.getInnerData()
    }
  
  },
  methods: {
    getInnerData() {
      ParamsService.getParams().then(res => {
        this.formData = res;
      }).catch(err => {
        this.$message.error(err)
      })
    },
    submit() {
      ParamsService.createConfFileByParams(this.formData).then(res => {
        // window.open(`/ear/download/${res.filename}`)
        this.$refs.previewDialog.onPreview(res.filename)
      }).catch(err => {
        this.$message.error(err)
      })
    },

    focusChange(vis, val=null) {
      this.drawerVisible = vis;
      if(vis) {
        this.description = {
          title: this.$t(`Params.${val}`),
          message: this.$t(`Params.${val}.Description`)
        }
      }
    },
    resetData() {
      this.formData = Utils.deepCopy(this.$store.getters['settings/getInnerData'])
    }
  }
}
</script>
<style >
.params-body {
  width: 100%;
}
.params-body-form {
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: auto;
  flex-grow: 1;
}
.params-body-form-content {
  width: 100%;
  /* padding: 50px; */
  display: flex;
  margin-bottom: 40px;
}
.params-model-titel {
  margin-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
}
.params-form-col {
  padding: 0 20px;
}
.params-form-col .ant-input {
  width: 280px;
}
.params-description {
  flex-grow: 0;
  flex-shrink: 0;
  width: 250px;
  height: 100%;
  /* padding: 20px; */
  border-left: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
}
.params-description-title {
  /* margin-bottom: 20px; */
  padding: 20px;
  font-weight: bold;
}
.params-description-body {
  /* text-indent: 2em; */
  /* padding-top: 15px; */
  overflow-y: auto;
}
.params-description-body > div {
  height: 100%;
  width: 100%;
  padding: 0 20px;
  color: #4b3c3c;
  white-space: pre-line;
}
.params-help-icon {
  color: #e8e8e8;
  font-size: 14px;
  text-indent: 0.2em;
}

</style>