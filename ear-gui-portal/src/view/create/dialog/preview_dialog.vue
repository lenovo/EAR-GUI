<template>
  <a-modal
      v-model="visible"
      :title="$t('Preview.Dialog.Title')"
      width='800px'>
      <a-textarea v-model="data" class="preview-conf-content" :read-only="true"></a-textarea>
      <template slot="footer">
        <a-button key="back" @click="handleCancel">{{$t('Button.Close')}}</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleDownload">{{$t('Button.Download')}}</a-button>
      </template>
    </a-modal>
</template>
<script>
import ParamsService from './../../../service/config'

export default {
  data() {
    return {
      loading: false,
      visible: false,
      filename: '',
      data: ''
    }
  },
  methods: {
    onPreview(filename) {
      this.visible = true;
      this.filename = filename;      
      ParamsService.getConfigFile(filename).then(res => {
        this.data = res.data;
      }).catch(err => {
        this.$message.error(err)
      })
    },
    handleDownload(e) {
      this.loading = true;
      const url = window.URL.createObjectURL(new Blob([this.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'ear.conf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      this.visible = false;
      this.loading = false;
    },
    handleCancel(e) {
      this.visible = false;
    },
  }
}
</script>
<style>
  .preview-conf-content {
    height: 400px !important;
  }
</style>