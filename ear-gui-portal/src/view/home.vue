<template>
  <div class="home-content" :spinning="loading">
    <a-card class="home-content-card" @click="goToSettings('import')">
      <img src="../assets/img/create.png" />
      <h2>{{$t('Home.Card.Create')}}</h2>
    </a-card>
    <a-upload name="file" :multiple="false" action="/api/ear/conf/upload/" :headers="headers" @change="handleChange">
      <a-card class="home-content-card" :showUploadList="false" :disabled='loading' type="upload">
        <img src="../assets/img/modify.png" />
        <h2>{{$t('Home.Card.Upload')}}</h2>
      </a-card>
    </a-upload>
  </div>
</template>

<script>
import ParamsService from './../service/config'
import Utils from './../common/utils'

export default {
  data() {
    return {
      headers: {
        authorization: 'authorization-text',
      },
      loading: false
    }
  },
  mounted() {

  },
  methods: {
    goToSettings(type) {
      this.$router.push({path: `/create/${type}`})
    },
    handleChange(info) {
      this.loading = true;
      if (info.file.status !== 'uploading') {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.loading = false;
        var innerData = ParamsService.ConfigParams.parseFromRestApi(info.file.response)
        this.$store.dispatch('settings/setInnerData', Utils.deepCopy(innerData));
        this.$message.success(this.$t(`Upload.Success.Message`, {name: info.file.name}));
        this.$router.push({path: '/create/upload'})
      } else if (info.file.status === 'error') {
        this.loading = false;
        this.$message.error(this.$t(`Upload.Failed.Message`, {name: info.file.name}));
      }
    }
  }
}
</script>
<style lang="css">
  .home-content {
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home-content-card {
    width: 300px;
    height: 300px;
    margin: 40px;
    cursor: pointer;
  }
  .home-content-card img {
    width: 180px;
    height: 180px;
    padding: 40px;
    object-fit: scale-down;
  }
  .home-content .ant-upload-list{
    display: none;
  }
</style>